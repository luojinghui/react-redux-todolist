import React, {Component, PropTypes } from 'react';

class TodoLi extends Component {
  render() {
    const styleBool = this.props.completed;

    return (
      <li
        onClick = { this.props.onClick }
        style = {{
          textDecoration: styleBool ? 'line-through' : 'none',
          cursor: styleBool ? 'default' : 'pointer',
          color: styleBool ? '#a2a2a2' : ' #222 '
        }}>
        {this.props.text}
      </li>
    );
  }
}

TodoLi.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};
TodoLi.defaultProps = {};

export default TodoLi;
