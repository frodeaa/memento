import { h, Component } from 'preact';
import style from './style';

export default class Signup extends Component {
  render() {
    return (
      <main class={style.signup}>
        <header>
          <h1>Create a new account</h1>
        </header>
        <form>
          <field>
            <label for="signup_name">Name</label>
            <input name="signup_name" type="text" required></input>
          </field>
          <field>
            <label for="signup_email">Email</label>
            <input name="signup_email" type="email"></input>
          </field>
          <field>
            <label for="signup_password">Password</label>
            <input name="signup_password" type="password"></input>
          </field>
          <field>
            <input name="signup_commit" type="submit"
              value="Sign Up"></input>
          </field>
        </form>
      </main>
    );
  }
}
