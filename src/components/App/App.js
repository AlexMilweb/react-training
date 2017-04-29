import React, { Component } from 'react';
import Example from '../Example/Example';
import Counter from '../Counter/Counter';
import Scale from '../Scale/Scale';
import Timer from '../Timer/Timer';
import './App.less';

export default class App extends Component {
    state = {}

    render() {
        return (
            <div className='app'>
                <Example
                    exampleName='Timer'
                    background='black'
                >
                    <Timer />
                </Example>
                <Example exampleName='Counter'>
                    <Example exampleProps='defaultNumber: 15'>
                        <Counter defaultNumber='15'/>
                    </Example>

                    <Example exampleProps='leftNumber, defaultNumber: 350'>
                        <Counter
                            leftNumber
                            defaultNumber='350'
                        />
                    </Example>

                    <Example exampleProps='rightNumber'>
                        <Counter rightNumber/>
                    </Example>

                    <Example exampleProps='rightNumber, editField, defaultNumber: 112'>
                        <Counter
                            rightNumber
                            editField
                            defaultNumber='112'
                        />
                    </Example>

                    <Example exampleProps='leftNumber, editField, stepField'>
                        <Counter
                            leftNumber
                            editField
                            stepField
                        />
                    </Example>
                </Example>
                <Example exampleName='Scale'>
                    <Scale />
                </Example>
            </div>
        );
    }
}
