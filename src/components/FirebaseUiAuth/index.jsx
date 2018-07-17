import React, { Component } from 'react';
import * as firebaseui from 'firebaseui';
import { auth } from 'firebase';
import 'firebaseui/dist/firebaseui.css';

class FirebaseUIAuth extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth());
  }

  componentDidMount() {
    const { uiConfig } = this.props;
    this.ui.start(this.container, uiConfig);
  }

  componentWillUnmount() {
    this.ui.reset();
  }

  render() {
    return <div ref={(el) => {this.container = el;}}></div>
  }
}

export default FirebaseUIAuth;
