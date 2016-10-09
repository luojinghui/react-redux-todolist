/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/9/23
 * Time: 下午1:16
 */
import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../../actions/todo/action'

const { show_all } = VisibilityFilters;

function visibilityFilter(state = show_all, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state
  }
}

function todos(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          id: action.id
        }
      ]
    case COMPLETE_TODO:
      let completed = !state[action.index].completed;

      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {completed: completed}),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp;
