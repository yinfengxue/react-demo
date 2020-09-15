/*
 * @Author: liuliang
 * @version: 1.0.0
 * @Date: 2020-09-11 16:52:07
 * @Description: todolist
 * @LastEditTime: 2020-09-15 21:53:26
 */
import React, { Component, Fragment } from 'react';
import './style.css';

// react不是操作dom，而是操作数据，感知数据变化
// react是响应的意思，感知到数据的变化，自动将数据映射到页面上
class TodoList extends Component {

  // 在类里面，一定会有一个constructor构造函数，会最优先被执行
  constructor () {
    super();
    // 定义数据
    this.state = {
      inputValue: '',
      list: [],
    }
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    })
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: '',
    })
  }

  handleItemDelete(idx) {
    // immmutable
    // state不允许我们做任何的改变
    const list = [...this.state.list];
    list.splice(idx, 1);
    this.setState({
      list: list,
    })
  }

  render() {
    // JSX(在js中写html标签，就叫做JSX语法)
    return (
      // Fragment是一个占位符，可以隐藏最外层的标签
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容：</label>
          <input
            id="insertArea"
            // style={{ border: '1px solid red' }}
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={this.handleItemDelete.bind(this, index)}
                  // 外层{}代表内层是个JS表达式，内层{}代表是个对象
                  dangerouslySetInnerHTML={{__html:item}}
                />
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
}

export default TodoList;