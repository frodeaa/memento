import { h, render, rerender } from 'preact';
import { route } from 'preact-router';
import App from 'components/app';
import 'style';

/*global sinon,expect*/

describe('App', () => {
  let scratch;

  before( () => {
    scratch = document.createElement('div');
    (document.body || document.documentElement).appendChild(scratch);
  });

  beforeEach( () => {
    scratch.innerHTML = '';
  });

  after( () => {
    scratch.parentNode.removeChild(scratch);
    scratch = null;
  });

  describe('routing', () => {
    it('should render the homepage', () => {
      render(<App />, scratch);

      expect(scratch.innerHTML).to.contain('Home');
    });

    it('should render /register', () => {
      render(<App />, scratch);
      route('/register');
      rerender();

      expect(scratch.innerHTML).to.contain('Create a new account');
    });

    it('should render /login', () => {
      render(<App />, scratch);
      route('/login');
      rerender();

      expect(scratch.innerHTML).to.contain('Log in');
    });

    it('should render /forgot-password', () => {
      render(<App />, scratch);
      route('/forgot-password');
      rerender();

      expect(scratch.innerHTML).to.contain('Reset Your Password');
    });

  });
});
