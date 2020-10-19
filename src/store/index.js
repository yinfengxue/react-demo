import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import MySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = componseEnhancers(
  // applyMiddleware(thunk),
  applyMiddleware(sagaMiddleware),
)

// 可以创建一个store（数据的公共存储仓库，但是没有管理能力，需要将reducer传给store）
const store = createStore(reducer, enhancer);
sagaMiddleware.run(MySaga);

export default store;