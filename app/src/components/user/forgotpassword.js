import { h, Component } from 'preact';
import style from './style';

class ForgotPasswordForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: undefined };
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
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <field>
          <label for="email">Email</label>
          <input name="email" type="email"
            onChange={this.onChange}></input>
        </field>
        <field>
          <input type="submit" value="Submit"></input>
        </field>
      </form>
    );
  }
}

export default class ForgotPassword extends Component {
  render() {
    const handleRecover = (email) => {
      console.log('handle recover', email);
    };
    return (
      <main class={style.forgotpassword}>
        <header>
          <h1>Reset Your Password</h1>
        </header>
        <p>
          Enter your email address below and we'll send you a link with instructions.</p>
        <ForgotPasswordForm onSubmit={handleRecover} />
      </main>
    );
  }
}
