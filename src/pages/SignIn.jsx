import React from 'react';
import { withRouter } from 'react-router-dom';

import SignUpLink from '../components/SignupLink';
import PasswordForgetLink from '../components/PasswordForgetLink';
import SignInForm from '../components/SigninForm';

const SignInPage = ({ history }) =>
  <div>
    <h1>SignIn</h1>
    <SignInForm history={history} />
    <PasswordForgetLink />
    <SignUpLink />
  </div>

export default withRouter(SignInPage);
