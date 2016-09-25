/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/9/22
 * Time: 下午7:56
 */
import React, { Component, PropTypes } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.handleOddAdd = this.handleOddAdd.bind(this);
    this.handleSyncAdd = this.handleSyncAdd.bind(this);
  }

  handleOddAdd() {
    if( this.props.value % 2 !== 0) {
      this.props.onIncrement();
    }
  }

  handleSyncAdd() {
    setTimeout(function() {
      this.props.onIncrement();
    }.bind(this), 1000)
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props;

    return (
      <div>
        <h3>click: {' ' + value + '  次'}</h3>
        <div>
          <button onClick={ onIncrement }> + </button>
        </div>
        <div>
          <button onClick={ onDecrement }> - </button>
        </div>
        <div>
          <button onClick={ this.handleOddAdd }> odd add </button>
        </div>
        <div>
          <button onClick={ this.handleSyncAdd }> sync add </button>
        </div>
      </div>
    )
  }
}
App.defaultProps = {
  value : PropTypes.number.isRequired,
  OnIncrement: PropTypes.func.isRequired,
  OnDecrement: PropTypes.func.isRequired
}
