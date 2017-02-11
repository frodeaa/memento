import { h, Component } from 'preact';
import style from './style';
import Field from '../shared/basicField.js';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <main class={style.signup}>
        <header>
          <h1>Create a new account</h1>
        </header>
        <form>
          <Field type="text" name="username" label="Name"
            onChange={this.handleInputChange}></Field>
          <Field type="email" name="email" label="Email"
            onChange={this.handleInputChange}></Field>
          <Field type="password" name="password" label="Password"
            onChange={this.handleInputChange}></Field>
          <field>
            <input name="commit" type="submit"
              value="Sign Up"></input>
          </field>
        </form>
      </main>
    );
  }
}
