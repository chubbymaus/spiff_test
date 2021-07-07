import React, {Component} from "react";
import "./RequestButton.scss"


class RequestButton extends Component {
    render() {
        return (
            <div className={this.props.buttonStyle}>
                {this.props.buttonText}
            </div>
        );
    }
}

export default RequestButton
