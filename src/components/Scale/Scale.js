import React, { Component } from 'react';
import './Scale.less';

export default class Scale extends Component {
    state = {
        maxScale: +this.props.maxScale || 600,
        minScale: +this.props.minScale || 1,
        steps: +this.props.steps || 5,
        heightScale: 600 / (+this.props.steps || 5),
        simpleLevel: +this.props.simpleLevel || 0,
        addCounter: +this.props.addCounter || 100
    }

    addGraduation() {
        const step = this.state.maxScale / this.state.steps;
        let arrSteps = [];

        for (let i = 0; i <= this.state.maxScale; i += step) {
            const style = {
                height: this.state.heightScale + 'px'
            }

            arrSteps.push(
                <li
                    className='scale__item'
                    key={i}
                    style={style}
                >{i}</li>
            )
        }
        return arrSteps;
    }

    addLevel() {
        this.setState({
            simpleLevel: this.state.simpleLevel + this.state.addCounter
        });
    }

    pourLevel() {
        this.setState({
            simpleLevel: this.state.simpleLevel - this.state.addCounter
        });
    }

    onChangeCounter(e) {
        const val = e.target.value;

        this.setState({
            addCounter: +val
        });
    }

    render() {
        return (
            <div className='scale'>
                <div className='scale__line-wrap'>
                    <div
                        className='scale__line-inner'
                        style={{transform: 'translateY(-' + this.state.simpleLevel + 'px)'}}
                    />
                </div>
                <ul className='scale__graduation'>
                    {this.addGraduation()}
                </ul>
                <div className='scale__controls'>
                    <input
                        className='scale__input'
                        name='quantity'
                        value={this.state.addCounter}
                        onChange={this.onChangeCounter.bind(this)}
                    />
                    <button
                        className='scale__button'
                        value={this.state.simpleLevel}
                        onClick={this.addLevel.bind(this)}
                    >
                        Добавить
                    </button>
                    <button
                        className='scale__button'
                        value={this.state.simpleLevel}
                        onClick={this.pourLevel.bind(this)}
                    >
                        Вылить
                    </button>
                </div>
            </div>
        );
    }
}
