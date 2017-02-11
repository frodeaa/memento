import { h, Component } from 'preact';
import style from './style';
import Field from '../shared/basicField.js';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('submit', this.state);
  }

  render() {
    return (
      <main class={style.signin}>
        <header>
          <h1>Sign in to an existing account</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <Field type="email" name="email" label="Email"
            onChange={this.handleInputChange}></Field>
          <Field type="password" name="password" label="Password"
            onChange={this.handleInputChange}></Field>
          <field>
            <input type="submit" value="Sign In"></input>
          </field>
        </form>
        <p>
          <a href="/sign-up">Sign up</a>&nbsp;&nbsp;&nbsp;
          <a href="/forgot-password">Forgot password?</a>
        </p>
      </main>
    );
  }
}
