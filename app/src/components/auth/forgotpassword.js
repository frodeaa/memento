import { h, Component } from 'preact';
import style from './style';
import Field from '../shared/basicField.js';

export default class ForgotPassword extends Component {
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
      <main class={style.forgotpassword}>
        <header>
          <h1>Reset Your Password</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <Field type="email" name="email" label="Email"
            onChange={this.handleInputChange}></Field>
          <field>
            <input type="submit" value="Sign In"></input>
          </field>
        </form>
        <p>
          Just want to sign in? <a href="/sign-in">
            Go back to the sign in form</a>
        </p>
      </main>
    );
  }
}
