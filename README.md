# react-form-expression
>一个基于REACT的表情小插件，可以在输入框中增加表情。
>
>A small expression plugin based on REACT can add expression to the input box.

## 原理
+ 用一张雪碧图存放所有表情
+ 不同代号对应不同表情
	<!---->
		[class*="expression-"] {
		  background: url('./img/css_sprites.png');
		  background-repeat: no-repeat;
		  display: inline-block;
		  width: 28px;
		  height: 28px;
		  vertical-align: bottom;
		}
		
		.expression-baibai {
		  background-position: -58px -10px;
		}
		.expression-biezui {
		  background-position: -154px -154px;
		}
+ 选中表情后，在原始value字符串上拼接对应表情代码,比如 `::shuai`
+ 使用API：ExpressionFormatter ,将对应的表情代码转化为span标签，比如 `<span class="expression-shuai"></span>` 从而展示
## API
+ ExpressionFormatter：将对应的表情代码转化为span标签，比如`<span class="expression-shuai"></span>`从而展示
## 食用
+ `npm i react-form-expression` 或者 `cnpm i react-form-expression`
+ `import { Expression, ExpressionFormatter } from 'react-form-expression'`
+ `<Expression value={this.state.value} change={this.changeValue} />`
+ 需要传2个props进入组件，value和change
	+ value:输入框的原始值
	+ change方法：用于接受组件插入表情后返回的值
## 完整栗子
	import React from 'react';
	import ReactDOM from 'react-dom';
	import { Expression, ExpressionFormatter } from 'react-form-expression'
	
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
