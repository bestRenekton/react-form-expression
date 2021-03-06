
import { Expression, ExpressionFormatter } from './component/Expression/Expression'
// import { Expression, ExpressionFormatter } from 'react-form-expression'

import React from 'react';
import ReactDOM from 'react-dom';

class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            comment: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }
    handleChange(event) {
        let newValue = event.target.value;
        let newComment = ExpressionFormatter(newValue);

        this.setState({
            value: newValue,
            comment: newComment
        });
    }
    changeValue(newValue) {
        let newComment = ExpressionFormatter(newValue);

        this.setState({
            value: newValue,
            comment: newComment
        })
    }
    render() {
        return (
            <div>
                <p dangerouslySetInnerHTML = {{ __html: this.state.comment }}></p>
                <textarea value={this.state.value} onChange={this.handleChange} cols="100" rows="10"></textarea>
                <Expression value={this.state.value} change={this.changeValue} />
            </div>
        )
    }
}
ReactDOM.render(
    <Demo />
    ,
    document.getElementById('root')
);

