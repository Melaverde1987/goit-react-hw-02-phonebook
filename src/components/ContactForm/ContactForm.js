import { Formik, Field, Form } from 'formik';

export const ContactForm = ({ onAdd }) => {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, actions) => {
          onAdd(values);
          //actions.resetForm();
        }}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="Jane" />

          <label htmlFor="number">Number</label>
          <Field
            type="tel"
            id="number"
            name="number"
            placeholder="+38 067 xxx xxx"
          />

          <button type="submit" className="btn btn-primary">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};
