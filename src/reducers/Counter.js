/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/9/21
 * Time: 下午7:48
 */
export default(state = 0, action) => {
  switch(action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state
  }
}
