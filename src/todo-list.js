/*
 * @Author: liuliang
 * @version: 1.0.0
 * @Date: 2020-09-11 16:52:07
 * @Description: todolist
 * @LastEditTime: 2020-09-17 10:40:40
 */
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import TodoListUI from './todo-list-ui';
import store from './store';
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  initListAction,
  getTodoList,
  getInitList,
} from './store/action-creators';
import './style.css';
import axios from 'axios';
import { CHANGE_INPUT_VALUE } from './store/action-types';

class TodoList extends Component {
  constructor() {
    super();
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    store.subscribe(this.handleStoreChange); // 组件订阅store， store里面的数据一旦变化，就会执行handleStoreChange方法
  }
  
  render() {
    
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list= {this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleDeleteItem={this.handleDeleteItem}
      />
    )
  }

  // 使用redux中间件将异步操作代码移到actions里面
  componentDidMount() {
    // 1、普通异步请求
    axios.get('/list.json').then((res) => {
      const data = res.data;
      const action = initListAction(data);
      store.dispatch(action);
    })

    // 2、使用redux-thunk
    // const action = getTodoList();
    // // 相当于异步函数被执行
    // store.dispatch(action);

    // 3、使用redux-saga
    const action = getInitList();
    store.dispatch(action);
  };

  handleInputChange(e) {
    // 要告诉store我要做什么事
    const action = getInputChangeAction(e.target.value);
    // 将action传递给store
    store.dispatch(action);
  }
  
  handleBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleDeleteItem(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }
}

export default TodoList;