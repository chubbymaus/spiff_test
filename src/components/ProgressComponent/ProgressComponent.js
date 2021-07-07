import React, {Component} from "react";
import "./ProgressComponent.scss"
import ProgressBar from "../progress_bar/ProgressBar";

class ProgressComponent extends Component {
    state = {
        requestButton: "Start Request",
        showProgress: false,
        isFinished: false,
        breakpoints: false,
        toggleButton: "V2 progress bar"
    };

    handleClick() {
        this.setState({showProgress: true, requestButton: "Loading..."})
    }

    finishProgress() {
        this.setState({isFinished: true, requestButton: "Start Request"})
        setTimeout(() => {
            this.setState({showProgress: false})
        }, 3000)
    }

    toggleRate() {
        this.setState({
            breakpoints: !this.state.breakpoints,
            toggleButton: (this.state.breakpoints ? 'V2 Progress Bar' : 'V1 Progress Bar')
        })
    }

    render() {
        return (
            <div className="progress-bar-buttons">
                {
                    this.state.showProgress &&
                    <ProgressBar isFinished={this.state.isFinished} breakpoints={this.state.breakpoints}/>
                }
                <button onClick={() => this.handleClick()}
                        className="button request-button">{this.state.requestButton}</button>
                <button onClick={() => this.finishProgress()} className="button finish-button">Finish Request</button>
                <button onClick={() => this.toggleRate()}
                        className="button toggle-button">{this.state.toggleButton}</button>
            </div>
        );
    }
}

export default ProgressComponent
