import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { addCheese } from '../actions/add-cheese';

export class FormToAddCheese extends React.Component {
  onSubmit = (values) => {
    console.log(values);
    return this.props.dispatch(addCheese(values));
  };


  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <label htmlFor="cheese-type">Enter cheese:</label>
          <Field
            name="cheeseType"
            id="cheese-type"
            type="text"
            // label=""
            component="input"
            // validate={[required, nonEmpty, mustBe5, allNumbers]}
          />
          <button type="submit">Add cheese</button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'add-new-cheese'
})(FormToAddCheese);