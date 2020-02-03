import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error': ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input
          {...input}
          autoComplete="off"
          className="ui field"
        />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit(formValues) {
    console.log(formValues);
  };

  render() {
    return (
      <div>
        <h1>StreamCreate</h1>
        <div>
          <form
            onSubmit={this.props.handleSubmit(this.onSubmit)}
            className="ui form error"
          >
            <Field
              name="title"
              component={this.renderInput}
              label="Choose the name of your channel"
            />
            <Field
              name="description"
              component={this.renderInput}
              label="Add a description"
            />
            <button className="ui button primary">Create</button>
          </form>
        </div>
      </div>
    );
  };
};

const validate = (formValues) => {
  const errors= {};

  if (!formValues.title) {
    errors.title = 'You must enter a title'
  };

  if (!formValues.description) {
    errors.description = 'You must enter a description'
  };

  return errors;
};

export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);
