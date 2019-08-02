import React, { Component } from 'react';
import { MasterLayout } from '../../layouts/login';

class LoginPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: 'vanphu',
      baby: 'baby',
    };
  }

  componentDidMount() {}

  onClick = () => {
    // eslint-disable-next-line no-console
    console.log(121);
  };
  render() {
    let { title, baby } = this.state;
    return (
      <MasterLayout>
        <h1>Login Pages</h1>
        <div>
          <button type="button" onClick={this.onClick}>
            ABCD
          </button>
        </div>
      </MasterLayout>
    );
  }
}

export default LoginPage;
