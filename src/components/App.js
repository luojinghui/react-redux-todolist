/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/9/21
 * Time: 下午6:29
 */
import React,{ Component , PropTypes} from 'react';
require('styles/App.css');

export default class App extends Component {
  constructor(props) {
    super(props)
    this.handleIfOdd = this.handleIfOdd.bind(this);
    this.timeOutAdd = this.timeOutAdd.bind(this);
  }

  handleIfOdd() {
    if(this.props.value % 2 !== 0) {
      this.props.OnIncrement();
    }
  }

  timeOutAdd() {
    setTimeout(function() {
      this.props.OnIncrement();
    }.bind(this), 1000)
  }

  render() {
    const { value , OnIncrement, OnDecrement } = this.props;

    return (
      <div>
        <h3>点击了: { value } 次 </h3>
        <div>
          <button onClick={ OnIncrement }>+</button>
          <button onClick={ OnDecrement }>-</button>
          <button onClick={ this.handleIfOdd }>increment if odd</button>
          <button onClick={ this.timeOutAdd }>increment async 1000</button>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  value: PropTypes.number.isRequired,
  OnIncrement: PropTypes.func.isRequired,
  OnDecrement: PropTypes.func.isRequired
};
App.defaultProps = {};
