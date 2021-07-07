import React, {Component} from "react";
import "./ProgressComponent.scss"
import RequestButton from "../request_button/RequestButton";

class ProgressBar extends Component {


    render() {
        return (
            <div className="progress-bar-buttons">
                <RequestButton buttonText="Start Request" buttonStyle="request-button"/>
                <RequestButton buttonText="Finish Request" buttonStyle="finish-button"/>
            </div>
        );
    }
}

export default ProgressBar
