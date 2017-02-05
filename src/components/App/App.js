import React, { Component } from 'react';
import Example from '../Example/Example';
import Counter from '../Counter/Counter';
import './App.less';

export default class App extends Component {
    state = {}

    render() {
        return (
            <div className="app">
                <Example exampleName="Counter">
                    <Counter />
                </Example>
            </div>
        );
    }
}
