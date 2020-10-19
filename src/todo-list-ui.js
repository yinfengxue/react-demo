import React, { Fragment } from 'react';
import { Input, Button, List } from 'antd';

// 无状态组件：性能优，不用调用生命周期函数
const TodoListUI = (props) => {
  const {
    inputValue,
    list,
    handleInputChange,
    handleBtnClick,
    handleDeleteItem,
  } = props;

  return (
    <Fragment>
      <div style={{ marginLeft: 30, marginTop: 30 }}>
        <Input
          value={inputValue}
          placeholder="输入"
          style={{ width: 300 }}
          onChange={handleInputChange}
        />
        <Button
          type="primary"
          style={{ marginLeft: 16 }}
          onClick={handleBtnClick}
        >
          提交
        </Button>
      </div>
      <List
        style={{ marginTop: 16, width: 300, marginLeft: 30 }}
        bordered
        dataSource={list}
        renderItem={(item, index) => <List.Item onClick={() => handleDeleteItem(index)}>{item}</List.Item>}
      />
    </Fragment>
  )
}

export default TodoListUI;