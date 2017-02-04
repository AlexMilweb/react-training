import React, { Component } from 'react';
import './Example.less';

export default class Example extends Component {
    render() {
        const {
            exampleName,
            children
        } = this.props;

        return (
            <section className="example">
                <h2 className="example__name">
                    {exampleName}
                </h2>

                {children}
            </section>
        );
    }
}
