import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from './home';
import SignIn from './auth/signin.js';
import SignUp from './auth/signup.js';
import ForgotPassword from './auth/forgotpassword.js';

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <Header />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <SignIn path="/sign-in" />
          <SignUp path="/sign-up" />
          <ForgotPassword path="/forgot-password" />
        </Router>
      </div>
    );
  }
}
