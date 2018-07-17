import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FirebaseUIAuth from '../../components/FirebaseUIAuth';
import { ui } from '../firebase';
import * as firebase from '../../firebase/firebase';

import SignUpLink from '../../components/SignupLink';
import PasswordForgetLink from '../../components/PasswordForgetLink';

const uiConfig = {
  // Called when the user has been successfully signed in.
  callbacks: {
    signInSuccess: (currentUser, credential, redirectUrl) => {
      // Do not redirect.
      return false;
    }
  },
  // Opens IDP Providers sign-in flow in a popup.
  signInFlow: 'popup',
  signInOptions: [
    {
      provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      recaptchaParameters: {
        type: 'image', // 'audio'
        size: 'normal', // 'invisible' or 'compact'
        badge: 'bottomleft' //' bottomright' or 'inline' applies to invisible.
      },
      defaultCountry: 'IL' // Set default country to the United Kingdom (+44).
    },
    // {
    //   provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //   scopes: ['https://www.googleapis.com/auth/plus.login']
    // },
    // {
    //   provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //   scopes: [
    //     'public_profile',
    //     'email',
    //     'user_likes',
    //     'user_friends'
    //   ]
    // },
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    // {
    //   provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //   // Whether the display name should be displayed in Sign Up page.
    //   requireDisplayName: true
    // }
  ],
  // Terms of service url.
  tosUrl: ''
};

const SignInPage = ({ history }) =>
  <div>
    <h1>SignIn</h1>
    <FirebaseUIAuth uiConfig={uiConfig}/>
    <PasswordForgetLink />
    <SignUpLink />
  </div>

export default withRouter(SignInPage);
