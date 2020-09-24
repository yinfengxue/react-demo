import { createStore } from 'redux';
import reducer from './reducer';

// 可以创建一个store（数据的公共存储仓库，但是没有管理能力，需要将reducer传给store）
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;