const defaultState = {
  inputValue: 'hello world',
  list: ['1','2','3'],
};

// reducer可以接收state，但是不能改变state
export default (state = defaultState, action) => {
  if (action.type === 'change_input_value') {
    // 深拷贝一份state数据
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    console.log('newState是', newState);
    return newState;
  }
  if (action.type === 'add_todo_item') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    return newState;
  }
  return state;
}