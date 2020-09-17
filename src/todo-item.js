/*
 * @Author: your name
 * @Date: 2020-09-16 18:19:31
 * @LastEditTime: 2020-09-17 09:32:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-demo\src\todo-item.js
 */
import React, { Component } from 'react';

// 子组件通过this.props.来接受父组件传递的内容
class todoItem extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this); // this永远指向todoItem
  }
  render() {
    return (
      <li
        key={this.props.index}
        onClick={this.handleClick}
      >
        {this.props.content}
      </li>
    ) 
  }

  // 不允许子组件修改父组件的数据，需要通过子组件调用父组件的方法去修改父组件中的数据
  handleClick() {
    // 此方法是父组件的方法，所以需要将this指向父组件
    this.props.deleteItem(this.props.index);
  }
}

export default todoItem;