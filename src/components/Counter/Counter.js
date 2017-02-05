import React, { Component } from 'react';
import './Counter.less';

export default class Counter extends Component {
    state = {
        number: 1
    }

    counterLess() {
        this.setState({
            number: --this.state.number
        });
    }

    counterMore() {
        this.setState({
            number: ++this.state.number
        });
    }

    render() {
        return(
            <div className="counter">
                <button
                    className="counter__button counter__button_less"
                    type="button"
                    onClick={this.counterLess.bind(this)}
                > - </button>

                <div className="counter__number"> {this.state.number} </div>

                <button
                    className="counter__button counter__button_more"
                    type="button"
                    onClick={this.counterMore.bind(this)}
                > + </button>
            </div>
        );
    }
}
