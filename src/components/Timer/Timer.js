import React, { Component } from 'react';
import classNames from 'classnames';
import { forEach } from 'ramda';
import './Timer.less';

export default class Timer extends Component {
    state = {
        numbers: {
            hourFirst: null,
            hourLast: null,
            minuteFirst: null,
            minuteLast: null,
            secondFirst: null,
            secondLast: null
        },
        previousNumbers: {
            hourFirst: null,
            hourLast: null,
            minuteFirst: null,
            minuteLast: null,
            secondFirst: null,
            secondLast: null
        }
    }

    getTime = () => {
        setInterval(() => {
            const date = new Date();
            const hours = String(date.getHours());
            const minutes = String(date.getMinutes());
            const seconds = String(date.getSeconds());

            this.setState({
                previousNumbers: {
                    hourFirst: this.state.numbers.hourFirst,
                    hourLast: this.state.numbers.hourLast,
                    minuteFirst: this.state.numbers.minuteFirst,
                    minuteLast: this.state.numbers.minuteLast,
                    secondFirst: this.state.numbers.secondFirst,
                    secondLast: this.state.numbers.secondLast
                }
            });

            this.setState({
                numbers: {
                    hourFirst: hours.length === 1 ? 0 : hours[0],
                    hourLast: hours[hours.length - 1],
                    minuteFirst: minutes.length === 1 ? 0 : minutes[0],
                    minuteLast: minutes[minutes.length - 1],
                    secondFirst: seconds.length === 1 ? 0 : seconds[0],
                    secondLast: seconds[seconds.length - 1]
                }
            });
        }, 1000);
    }

    componentDidMount() {
        this.getTime();
    }

    renderTimerGroup = (firstNumberValue, lastNumberValue, firstNumberName, lastNumberName) => {
        setTimeout(() => {
            const {
                firstNumeral,
                lastNumeral
            } = this.refs;
            firstNumeral.classList.remove('timer__numeral_active');
            lastNumeral.classList.remove('timer__numeral_active');
        }, 900);

        return (
            <div className='timer__group'>
                <div
                    className={classNames({
                        'timer__numeral': true,
                        'timer__numeral_active': +firstNumberValue !== +this.state.previousNumbers[firstNumberName]
                    })}
                    ref='firstNumeral'
                >
                    <div className='timer__numeral-top-back'>
                        <div className='timer__numeral-full'>
                            {+firstNumberValue}
                        </div>
                    </div>
                    <div className='timer__numeral-bottom-back'>
                        <div className='timer__numeral-full'>
                            {+firstNumberValue === 0 ? 9 : +firstNumberValue - 1}
                        </div>
                    </div>
                    <div className='timer__numeral-top'>
                        <div className='timer__numeral-full'>
                            {+firstNumberValue === 0 ? 9 : +firstNumberValue - 1}
                        </div>
                    </div>
                    <div className='timer__numeral-bottom'>
                        <div className='timer__numeral-full'>
                            {+firstNumberValue}
                        </div>
                    </div>
                </div>
                <div
                    className={classNames({
                        'timer__numeral': true,
                        'timer__numeral_active': +lastNumberValue !== +this.state.previousNumbers[lastNumberName]
                    })}
                    ref='lastNumeral'
                >
                    <div className='timer__numeral-top-back'>
                        <div className='timer__numeral-full'>
                            {+lastNumberValue}
                        </div>
                    </div>
                    <div className='timer__numeral-bottom-back'>
                        <div className='timer__numeral-full'>
                            {+lastNumberValue === 0 ? 9 : +lastNumberValue - 1}
                        </div>
                    </div>
                    <div className='timer__numeral-top'>
                        <div className='timer__numeral-full'>
                            {+lastNumberValue === 0 ? 9 : +lastNumberValue - 1}
                        </div>
                    </div>
                    <div className='timer__numeral-bottom'>
                        <div className='timer__numeral-full'>
                            {+lastNumberValue}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const {
            hourFirst,
            hourLast,
            minuteFirst,
            minuteLast,
            secondFirst,
            secondLast
        } = this.state.numbers;

        return (
            <div className='timer'>
                {this.renderTimerGroup(hourFirst, hourLast, 'hourFirst', 'hourLast')}
                {this.renderTimerGroup(minuteFirst, minuteLast, 'minuteFirst', 'minuteLast')}
                {this.renderTimerGroup(secondFirst, secondLast, 'secondFirst', 'secondLast')}
            </div>
        )
    }
}
