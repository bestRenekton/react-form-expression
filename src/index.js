
import { Expression, ExpressionFormatter } from './component/Expression/Expression'

//预览时使用
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
    componentDidUpdate() {
        document.getElementById("comment").innerHTML = this.state.comment;
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
                <p id="comment"></p>
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

//打包时使用
// export default Expression;
