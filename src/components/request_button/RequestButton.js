import React, {Component} from "react";
import "./RequestButton.scss"


class RequestButton extends Component {
    render() {
        return (
            <button className={`button ${this.props.buttonStyle}`}>
                {this.props.buttonText}
            </button>
        );
    }
}

export default RequestButton
