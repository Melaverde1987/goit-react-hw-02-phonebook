import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';

export class Filter extends Component {
  render() {
    return (
      <div>
        <p>Find contacts by name</p>
        <Formik
          initialValues={{
            name: '',
          }}
          onSubmit={(values, actions) => {
            console.log(values);
            //actions.resetForm();
          }}
        >
          <Form>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" placeholder="John Doe" />

            <button type="submit" className="btn btn-primary">
              Find
            </button>
          </Form>
        </Formik>
      </div>
    );
  }
}
