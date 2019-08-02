import React, { Component } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import HeaderLayout from './HeaderLayout';
import FooterLayout from './FooterLayout';

class MasterLayout extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {}

  render() {
    let { children } = this.props;
    const childrenWidthProps = React.Children.map(children, child =>
      React.cloneElement(child, {}),
    );
    return (
      <div>
        <HeaderLayout />
        <div className="container-fluid">{childrenWidthProps}</div>
        <FooterLayout />
      </div>
    );
  }
}
MasterLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MasterLayout;
