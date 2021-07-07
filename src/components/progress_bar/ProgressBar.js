import React, {Component} from "react";
import "./ProgressBar.scss"


class ProgressBar extends Component {
    state = {
        progress: 0,
    };

    componentDidMount() {
        setInterval(() => this.setState({progress: this.state.progress + 10} ), 15000/10);
    }

    render() {
        return (
            <progress className='progress-bar' value={this.state.progress} max="100"/>
        );
    }
}

export default ProgressBar
