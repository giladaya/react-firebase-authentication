import React from 'react';

import AuthUserContext from '../components/Session/AuthUserContext';
import PasswordForgetForm from '../components/PasswordForgetForm';
import PasswordChangeForm from '../components/PasswordChangeForm';
import withAuthorization from '../components/Session/withAuthorization';

const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <h1>Account: {authUser.email}</h1>
        Forgot: <PasswordForgetForm />
        Change: <PasswordChangeForm />
      </div>
    }
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
