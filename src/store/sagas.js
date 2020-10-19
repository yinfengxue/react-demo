import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { GET_INIT_LIST } from './action-types';
import { initListAction } from  './action-creators';
import axios from 'axios';
import { message } from 'antd';

function* getInitList() {
  // 写一些异步逻辑
  try {
    const res = yield axios.get('/list.json');
    const action = initListAction(res.data);
    yield put(action);
  }catch(e) {
    message.error('list.json网络请求失败!');
  }
}

// generator 函数
function* mySaga() {
  // 捕捉每一次派发的action，就会执行fetUser方法
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;