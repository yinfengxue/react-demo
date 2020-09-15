/*
 * @Author: liuliang
 * @version: 1.0.0
 * @Date: 2020-09-11 15:30:34
 * @Description: 新增删除demo  
 * @LastEditTime: 2020-09-15 21:53:09
 */
import React from 'react'; // 使用jsx语法时，需要引入React
import ReactDOM from 'react-dom';
import TodoList from './todoList';

// render方法可以将一个组件挂载到一个dom节点上
// JSX语法中，自定义组件必须以大写字母开头
ReactDOM.render(<TodoList />, document.getElementById('root'));
