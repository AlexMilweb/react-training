import React, { Component } from 'react';
import classNames from 'classnames';
import './Counter.less';

export default class Counter extends Component {
    state = {
        number: this.props.defaultNumber || 1
    }

    counterLess() {
        this.setState({
            number: --this.state.number
        });
        console.log(this.state.number + "state")
    }

    counterMore() {
        this.setState({
            number: ++this.state.number
        });
        console.log(this.state.number + "state")
    }

    counterChange(event) {
        this.setState({
            number: event.target.value
        });
        console.log(event.target.value)
    }

    render() {
        const {
            leftNumber,
            rightNumber,
            editField
        } = this.props

        return(
            <div
                className={classNames({
                    "counter": true,
                    "counter_left": leftNumber,
                    "counter_right": rightNumber
                })}
            >
                <button
                    className="counter__button counter__button_less"
                    type="button"
                    onClick={this.counterLess.bind(this)}
                > - </button>

                {editField
                    ? <input
                        className="counter__number counter__number_input"
                        type="text"
                        value={this.state.number}
                        onChange={this.counterChange.bind(this)}
                    />
                    : <div className="counter__number"> {this.state.number} </div>
                }

                <button
                    className="counter__button counter__button_more"
                    type="button"
                    onClick={this.counterMore.bind(this)}
                > + </button>
            </div>
        );
    }
}
