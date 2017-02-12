import { h, Component } from 'preact';
import style from './style';
import Field from '../shared/basicField.js';

export default class SignUp extends Component {
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
      <main class={style.signup}>
        <header>
          <h1>Create a new account</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <Field type="text" name="username" label="Name"
            onChange={this.handleInputChange}></Field>
          <Field type="email" name="email" label="Email"
            onChange={this.handleInputChange}></Field>
          <Field type="password" name="password" label="Password"
            onChange={this.handleInputChange}></Field>
          <field>
            <input type="submit" value="Sign Up"></input>
          </field>
        </form>
      </main>
    );
  }
}
