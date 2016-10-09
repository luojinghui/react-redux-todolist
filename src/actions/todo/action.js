/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/9/23
 * Time: 下午12:47
 */
/**
 * action 类型
 */
export const  ADD_TODO = 'add_todo';
export const  COMPLETE_TODO = 'complete_todo';
export const  SET_VISIBILITY_FILTER = 'set_visibility_filter';


/**
 * 其他常量
 */
export const VisibilityFilters = {
  show_all: 'show_all',
  show_completed: 'show_completed',
  show_active: 'show_active'
}

/**
 * action创建函数
 */
let count = 0;
export function addTodo(text) {
  return { type: ADD_TODO, id: count ++, text }
}

export function completeTodo(index) {
  return {type: COMPLETE_TODO, index}
}

export function setVisibilityFilter(filter) {
  return {type: SET_VISIBILITY_FILTER, filter}
}



