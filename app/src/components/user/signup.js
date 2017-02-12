import { h, Component } from 'preact';
import style from './style';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:undefined,
      email: undefined,
      password: undefined
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (event) => {
    this.props.onSubmit(this.state);
    event.preventDefault();
  }

  onChange = (event) => {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  }

  render(props) {
    return (
      <form onSubmit={this.onSubmit}>
        <field>
          <label for="username">Name</label>
          <input name="username" type="text"
            onChange={this.onChange}></input>
        </field>
        <field>
          <label for="email">Email</label>
          <input name="email" type="email"
            onChange={this.onChange}></input>
        </field>
        <field>
          <label for="password">Password</label>
          <input name="password" type="password"
            onChange={this.onChange}></input>
        </field>
        <field>
          <input type="submit" value="submit">PUSH</input>
        </field>
      </form>
    );
  }
}

export default class SignUp extends Component {
  render() {
    const handleNewUser = (user) => {
      console.log('handle new user', user);
    };
    return (
      <main class={style.signup}>
        <header>
          <h1>Create a new account</h1>
        </header>
        <RegistrationForm onSubmit={handleNewUser} />
      </main>
    );
  }
}
