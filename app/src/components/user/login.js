import { h, Component } from 'preact';
import style from './style';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

export default class LogIn extends Component {
  render() {
    const handleLogin = (credentials) => {
      console.log('handle login', credentials);
    };
    return (
      <main class={style.signin}>
        <header>
          <h1>Log in</h1>
        </header>
        <LoginForm onSubmit={handleLogin} />
        <p>
          <a href="/forgot-password">Forgot password?</a>
        </p>
      </main>
    );
  }
}
