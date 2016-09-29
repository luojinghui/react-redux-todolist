/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/9/22
 * Time: 下午8:28
 */
import React ,{ Component , PropTypes} from 'react'
import { connect } from 'react-redux'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../../actions/todo/action'
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

class Todo extends Component {
  render() {

      console.log(this.props);
    const { dispatch, visibleTodos, visibilityFilter } = this.props;
    return (
      <div>
        <AddTodo
          onAddClick = { text => dispatch(addTodo(text))
          }
        />

        <TodoList
          todos = { visibleTodos }
          onTodoClick = {
            index => dispatch(completeTodo(index))
          }
        />

        <Footer
          filter = { visibilityFilter }
          onFilterChange = {
            nextFilter => dispatch(setVisibilityFilter(nextFilter))
          }
        />
      </div>
    )
  }
}

Todo.PropTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  visibilityFilter: PropTypes.oneOf([
    'show_all',
    'show_completed',
    'show_active'
  ]).isRequired
}

function selectTodos(todos, filter) {
  switch(filter) {
    case VisibilityFilters.show_all:
      return todos
    case VisibilityFilters.show_completed:
      return todos.filter(todo => todo.completed)
    case VisibilityFilters.show_active:
      return todos.filter(todo => !todo.completed)
  }
}

function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilitFilter
  }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(Todo)




// todos = { [
// {
//   text: 'use Redux',
//   completed: true
// },
// {
//   text: 'learn to connect it to react',
//     completed: false
// },
// {
//   text: 'test value',
//     completed: false
// }
// ] }
