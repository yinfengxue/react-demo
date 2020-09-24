/*
 * @Author: liuliang
 * @version: 1.0.0
 * @Date: 2020-09-11 16:52:07
 * @Description: todolist
 * @LastEditTime: 2020-09-17 10:40:40
 */
import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';
import './style.css';

class TodoList extends Component {
  constructor() {
    super();
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    store.subscribe(this.handleStoreChange); // 组件订阅store， store里面的数据一旦变化，就会执行handleStoreChange方法
  }
  
  render() {
    console.log('store.getState是', store, store.getState());
    return (
      <Fragment>
        <div style={{ marginLeft: 30, marginTop: 30 }}>
          <Input
            value={this.state.inputValue}
            placeholder="输入"
            style={{ width: 300 }}
            onChange={this.handleInputChange}
          />
          <Button
            type="primary"
            style={{ marginLeft: 16 }}
            onClick={this.handleBtnClick}
          >
            提交
          </Button>
        </div>
        <List
          style={{ marginTop: 16, width: 300, marginLeft: 30 }}
          bordered
          dataSource={this.state.list}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </Fragment>
    )
  }

  handleInputChange(e) {
    // 要告诉store我要做什么事
    const action = {
      type: 'change_input_value',
      value: e.target.value,
    }
    console.log('input输入框', e.target.value);
    // 将action传递给store
    store.dispatch(action);
  }
  
  handleBtnClick() {
    const action = {
      type: 'add_todo_item',
    };
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
    console.log('store changed');
  }
}

export default TodoList;