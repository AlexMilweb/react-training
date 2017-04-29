import React, { Component } from 'react';
import classNames from 'classnames';
import './Example.less';

export default class Example extends Component {
    render() {
        const {
            exampleName,
            exampleProps,
            children,
            background
        } = this.props;

        return (
            <section
                className={classNames({
                    'example': true,
                    [`example_${background}`]: background
                })}
            >
                {exampleName ?
                    <h2 className='example__name'>
                        {exampleName}
                    </h2>
                    : false
                }

                <p className='example__props'>
                    {exampleProps
                        ? <span>Props: </span>
                        : false
                    }
                    {exampleProps}
                </p>

                <div className='example__content'>
                    {children}
                </div>

            </section>
        );
    }
}
