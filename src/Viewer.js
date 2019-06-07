import React from 'react';
import {getAll, getById} from "./api/phone";

class Viewer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            phone: props.phone,
            selectedPhoneImg: props.phone.images[0],
            basketItems: [],
        };
    }

    onPhoneImgSelected(i) {
        this.setState({
            selectedPhoneImg: this.props.phone.images[i],
        })
    }

    render() {
        return (
            <div>
                <img alt=""
                     className="phone"
                     src={this.state.selectedPhoneImg}
                     onPhoneImgSelected={(imageUrl) => {
                         this.setState({
                             selectedPhoneImg: imageUrl,
                         });
                     }}/>
                <button onClick={this.props.onBack}>Back</button>
                <button
                    onClick={() => {
                        this.props.addToBasket(this.state.phone.id)
                    }}>
                    Add to basket
                </button>

                <h1>{this.state.phone.name}</h1>
                <p>{this.state.phone.description}</p>

                <ul className="phone-thumbs">
                    {this.state.phone.images.map((imageUrl, i) => (
                        <li>
                            <img alt=""
                                 src={imageUrl}
                                 onClick={() => {
                                     this.onPhoneImgSelected(i)
                                 }}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}


export default Viewer;