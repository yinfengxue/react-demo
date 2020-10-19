import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION, GET_INIT_LIST } from './action-types';
import store from './index';
import axios from 'axios';

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
});

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM,
});

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index,
});

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data,
});

// 在没用用中间件之前，action是一个对象；用了中间件后，action可以是一个函数
// export const getTodoList = () => {
//   return (dispatch) => {
//     // 异步操作
//     axios.get('/list.json').then((res) => {
//       const data = res.data;
//       // 修改store里面的数据
//       const action = initListAction(data);
//       // store.dispatch(action);
//       dispatch(action);
//     })
//   }
// };

export const getInitList = () => ({
  type: GET_INIT_LIST,
})