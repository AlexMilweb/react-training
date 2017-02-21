import React, { Component } from 'react';
import './Scale.less';

export default class Scale extends Component {
    state = {
        maxScale: +this.props.maxScale || 600,
        steps: +this.props.steps || 5,
        simpleLevel: +this.props.simpleLevel || 0,
        addCounter: +this.props.addCounter || 100
    }

    addGraduation = () => {
        const step = this.state.maxScale / this.state.steps;
        let arrSteps = [];

        for (let i = 0; i <= this.state.maxScale; i += step) {
            const style = {
                height: step * (600 / this.state.maxScale) + 'px'
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

    handleAddLevel = () => {
        if (this.state.simpleLevel + this.state.addCounter <= this.state.maxScale) {
            this.setState({
                simpleLevel: this.state.simpleLevel + this.state.addCounter
            });
        }
    }

    handlePourLevel = () => {
        if (this.state.simpleLevel - this.state.addCounter >= 0) {
            this.setState({
                simpleLevel: this.state.simpleLevel - this.state.addCounter
            });
        }
    }

    onChangeCounter = e => {
        const val = e.target.value;

        this.setState({
            addCounter: +val
        });
    }

    onChangeMaxScale = e => {
        const val = +e.target.value;

        if (val <= 0) {
            return;
        }

        this.setState({
            maxScale: val
        });
    }

    onChangeSteps = e => {
        const val = e.target.value;

        this.setState({
            steps: +val
        });
    }

    render() {
        return (
            <div className='scale'>
                <div className='scale__line-wrap'>
                    <div
                        className='scale__line-inner'
                        style={{transform: 'translateY(-' + this.state.simpleLevel * (600 / this.state.maxScale) + 'px)'}}
                    />
                </div>
                <ul className='scale__graduation'>
                    {this.addGraduation()}
                </ul>
                <div className='scale__controls'>
                    <section className='scale__controls-section'>
                        <div className='scale__controls-title'>
                            Current level
                        </div>
                        <input
                            className='scale__input'
                            name='current'
                            value={this.state.simpleLevel}
                        />
                    </section>

                    <section className='scale__controls-section'>
                        <div className='scale__controls-title'>
                            Counter
                        </div>
                        <input
                            className='scale__input'
                            name='quantity'
                            value={this.state.addCounter}
                            onChange={this.onChangeCounter}
                        />
                        <button
                            className='scale__button'
                            value={this.state.simpleLevel}
                            onClick={this.handleAddLevel}
                        >
                            Добавить
                        </button>
                        <button
                            className='scale__button'
                            value={this.state.simpleLevel}
                            onClick={this.handlePourLevel}
                        >
                            Вылить
                        </button>
                    </section>

                    <section className='scale__controls-section'>
                        <div className='scale__controls-title'>
                            Max Scale
                        </div>
                        <input
                            className='scale__input'
                            name='maxScale'
                            value={this.state.maxScale}
                            onChange={this.onChangeMaxScale}
                        />
                    </section>

                    <section className='scale__controls-section'>
                        <div className='scale__controls-title'>
                            Steps graduation
                        </div>
                        <input
                            className='scale__input'
                            name='steps'
                            value={this.state.steps}
                            onChange={this.onChangeSteps}
                        />
                    </section>
                </div>
            </div>
        );
    }
}
