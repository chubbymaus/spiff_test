import React, {Component} from "react";
import "./ProgressBar.scss"


class ProgressBar extends Component {
    state = {
        progress: 0,
    };

    componentDidMount() {
        if(this.props.breakpoints === false ){
            setInterval(() => {
                if (this.state.progress < 90) {
                    this.setState({progress: this.state.progress + 10})
                }
            }, 1667);
        } else {
            setTimeout(() => {
                if (this.state.progress < 90) {
                    this.setState({progress: this.state.progress + 1})
                }
            }, 250);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.breakpoints === true && this.state.progress !== prevState){
            const breakpoints = [10, 34, 60, 78, 90]

            setTimeout(() => {
                if (this.state.progress < 90) {
                    this.setState({progress: this.state.progress + 1})
                }
            }, (breakpoints.includes(this.state.progress) ? 2000 : 250));
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.isFinished === true) {
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
