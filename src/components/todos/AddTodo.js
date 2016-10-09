/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/9/22
 * Time: 下午8:43
 */
import React, { Component, PropTypes } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props)

    this.handleClickAdd = this.handleClickAdd.bind(this)
  }

  handleClickAdd(e) {
    const todoNode = this.refs.todoValue;
    const todoValue = todoNode.value.trim();

    e.stopPropagation();
    e.preventDefault();

    if(todoValue === '') {
      todoNode.focus();
      return
    }

    this.props.onAddClick(todoValue);
    todoNode.value = '';
  }

  render() {
    return (
      <div>
        <input type="text" ref="todoValue"/>
        <button onClick={ e => this.handleClickAdd(e) }>add</button>
      </div>
    )
  }
}

AddTodo.propTypes = {
  onAddClick : PropTypes.func.isRequired
};
AddTodo.defaultProps = {};

export default AddTodo;

