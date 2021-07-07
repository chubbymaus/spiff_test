import React, {Component} from "react";
import "./ProgressComponent.scss"
import ProgressBar from "../progress_bar/ProgressBar";

class ProgressComponent extends Component {
    state = {
        requestButton: "Start Request",
        showProgress: false,
        isFinished: false,
    };

    handleClick() {
        console.log('clicked')
        this.setState({showProgress: true, requestButton: "Loading..."})
    }

    finishProgress() {
        console.log('clicked')
        this.setState({isFinished: true})
    }

    render() {
        return (
            <div className="progress-bar-buttons">
                {
                    this.state.showProgress &&
                    <ProgressBar/>
                }
                <button onClick={() => this.handleClick()} className="button request-button">{this.state.requestButton}</button>
                <button onClick={() => this.finishProgress()} className="button finish-button">Finish Request</button>
            </div>
        );
    }
}

export default ProgressComponent
