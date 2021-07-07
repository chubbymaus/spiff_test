import React, {Component} from "react";
import "./ProgressBar.scss"


class ProgressBar extends Component {
    state = {
        progress: 0,
    };

    componentDidMount() {
        setInterval(() => {
            if (this.state.progress < 90) {
                this.setState({progress: this.state.progress + 10})
            }
        }, 1667);
    }

    componentWillReceiveProps(nextProps, nextContext){
        if(nextProps.isFinished === true){
            this.setState({progress: 100})
        }
    }

    render() {
        return (
            <progress className='progress-bar' value={this.state.progress} max="100"/>
        );
    }
}

export default ProgressBar
