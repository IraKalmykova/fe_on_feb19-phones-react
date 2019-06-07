import React from 'react';

import {getAll, getById} from './api/phone'
import Basket from './Basket'
import Filter from './Filter'
import Catalog from './Catalog'
import Viewer from './Viewer'

import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            phones: getAll(),
            selectedPhone: null,
            basketItems: [],
        };
    }

    render() {
        return (
            <div className="App">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">
                            <Filter/>
                            <Basket phoneId={this.state.basketItems}
                                    deleteFromBasket={i => {
                                        this.state.basketItems.splice(i, 1)
                                        this.setState({
                                            basketItems: this.state.basketItems,
                                        })
                                    }}/>
                        </div>

                        <div className="col-md-10">
                            {this.state.selectedPhone ? (
                                <Viewer
                                    phone={this.state.selectedPhone}
                                    onBack={() => {
                                        this.setState({
                                            selectedPhone: null,
                                        });
                                    }}
                                    addToBasket={(phoneId) => {
                                        this.setState((prevState) => {
                                            return {
                                                basketItems: this.state.basketItems.concat(phoneId),
                                            }

                                        })
                                    }}
                                />
                            ) : (
                                <Catalog
                                    phones={this.state.phones}
                                    onPhoneSelected={(phoneId) => {
                                        this.setState({
                                            selectedPhone: getById(phoneId),
                                        });
                                    }}
                                    addToBasket={(phoneId) => {
                                        this.setState((prevState) => {
                                            return {
                                                basketItems: this.state.basketItems.concat(phoneId),
                                            }

                                        })
                                    }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
