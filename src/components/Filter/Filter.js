import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';

export class Filter extends Component {
  render() {
    return (
      <div>
        <p>Find contacts by name</p>
        <Formik
          initialValues={{
            search: '',
          }}
          onSubmit={(values, actions) => {
            console.log(values);
            //actions.resetForm();
          }}
        >
          <Form>
            <label htmlFor="search">Name</label>
            <Field
              id="search"
              name="search"
              placeholder="John Doe"
              value={this.props.inputValue}
              onChange={this.props.handleChange}
            />
          </Form>
        </Formik>
      </div>
    );
  }
}
