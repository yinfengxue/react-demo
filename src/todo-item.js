/*
 * @Author: liuliang
 * @Date: 2020-09-16 18:19:31
 * @LastEditTime: 2020-09-17 09:54:28
 * @Description: todoItem
 */
import React, { Component } from 'react';

class todoItem extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { content, index } = this.props;
    return (
      <li key={index} onClick={this.handleClick}>
        {content}
      </li>
    ) 
  }

  handleClick() {
    const { deleteItem } = this.props;
    deleteItem(this.props.index);
  }
}

export default todoItem;