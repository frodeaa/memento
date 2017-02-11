import { h, Component } from 'preact'

export default class Field extends Component {
  render(props, label) {
    return (
      <field>
        <label for={props.name}>{props.label}</label>
        <input 
          type={props.type}
          name={props.name}
          required></input>
      </field>
    );
  }
}


