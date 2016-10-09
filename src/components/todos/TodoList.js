/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/9/23
 * Time: 上午10:49
 */
import React, {Component, PropTypes } from 'react'
import TodoLi from './TodoLi'

class TodoList extends Component {
  render() {
    return (
      <ol>
        {
          this.props.todos.map((todo, index) =>
            <TodoLi
              {...todo}
              key = {index}
              onClick = { () => this.props.onTodoClick(todo.id) }
            />
          )
        }
      </ol>
    )
  }
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
};
TodoList.defaultProps = {};

export default TodoList;
