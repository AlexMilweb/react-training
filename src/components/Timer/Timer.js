import React, { Component } from 'react';
import classnames from 'classnames';
import './Timer.less';

export default class Timer extends Component {
    state = {
        hours: null,
        minutes: null,
        seconds: null
    }

    getTime = () => {
        setInterval(() => {
            const date = new Date();

            this.setState({
                hours: date.getHours(),
                minutes: date.getMinutes(),
                seconds: date.getSeconds()
            });
            console.log(String(this.state.hours).length);
        }, 1000);
    }

    componentDidMount() {
        this.getTime();
    }

    renderTimerGroup = time => {
        const timeStr = String(time);
        const firstNumber = timeStr.length === 1 ? 0 : timeStr[0];
        const secondNumber = timeStr[timeStr.length - 1]

        return (
            <div className='timer__group'>
                <div className='timer__numeral'>
                    {firstNumber}
                </div>
                <div className='timer__numeral'>
                    {secondNumber}
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className='timer'>
                {this.renderTimerGroup(this.state.hours)}
                {this.renderTimerGroup(this.state.minutes)}
                {this.renderTimerGroup(this.state.seconds)}
            </div>
        )
    }
}
