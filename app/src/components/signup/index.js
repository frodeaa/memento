import { h, Component } from 'preact';
import style from './style';
import Field from '../shared/basicField.js';

export default class Signup extends Component {
  render() {
    return (
      <main class={style.signup}>
        <header>
          <h1>Create a new account</h1>
        </header>
        <form>
          <Field type="text" name="signup_name" label="Name" required></Field>
          <Field type="email" name="signup_email" label="Email"></Field>
          <Field type="password" name="signup_password" label="Password"></Field>
          <field>
            <input name="signup_commit" type="submit"
              value="Sign Up"></input>
          </field>
        </form>
      </main>
    );
  }
}
