import React from 'react';
import styles from './Expression.less';
import btnPic from './expression.png'
import './data/data.css'
import expressionData from './data/data.js'

//表情按钮
export class Expression extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,

        }
        this.toggleBody = this.toggleBody.bind(this);
        this.chooseExpression = this.chooseExpression.bind(this);
    }
    toggleBody() {
        this.setState({ show: !this.state.show })
    }
    chooseExpression(e) {
        let oldValue = this.props.value;
        let addValue = `::${e}`;
        let newValue = oldValue + addValue;
        // console.log(newValue)
        this.props.change(newValue)
    }
    render() {
        return (
            <div className={styles.expressionBox}>
                <img onClick={this.toggleBody} src={btnPic} className={styles.expression_head} alt="表情" />
                <div className={styles.expression_body} style={{ display: this.state.show ? 'block' : 'none' }}>
                    <ul>
                        {
                            expressionData.map((e, i) => {
                                return (
                                    <li key={i}>
                                        <a className={`expression-${e.code}`} onClick={() => { this.chooseExpression(e.code) }} href="javascript:;"></a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

//转换"::代码"为对应表情
export const ExpressionFormatter = (str) => {
    let strNew = str;
    for (let i = 0; i < expressionData.length; i++) {
        let reg = eval("/::" + expressionData[i]["code"] + "/g");
        strNew = strNew.replace(
            reg,
            `<span class="expression-${expressionData[i]["code"]}"></span>`
        );
    }
    return strNew;
}

//打包时使用
// module.exports = {
//     Test,
//     test2
// };

//预览时使用
// export default Expression