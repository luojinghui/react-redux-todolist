/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/9/23
 * Time: 上午11:22
 */
import React, {Component, PropTypes } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props)
    this.renderFilter = this.renderFilter.bind(this)
  }

  renderFilter(filter, name) {
    if(filter === this.props.filter) {
      return <span className="filter">{name}</span>;
    }

    return (
      <a href="#"
        onClick = { e => {
          e.preventDefault();
          this.props.onFilterChange(filter);
        } }
      >
        {name}
      </a>
    )
  }

  render() {
    return (
      <p>
        <span>switch:{'    '}</span>
        { this.renderFilter('show_all', 'all') }
        { this.renderFilter('show_completed', 'completed') }
        { this.renderFilter('show_active', 'active') }
      </p>
    );
  }
}

Footer.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([
    'show_all',
    'show_completed',
    'show_active'
  ]).isRequired
};
Footer.defaultProps = {};

export default Footer;
