import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  channel: '',
  comments: '',
  address: '',
}

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  channel: Yup.string().required('Channel is required'),
  comments: Yup.string(),
  address: Yup.string(),
})

const onSubmit = values => console.log(values)

const YoutubeForm = () => {
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}>

      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name"/>
          <ErrorMessage name="name"/>
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field type="email" id="email" name="email"/>
          <ErrorMessage name="email" />
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel"/>
          <ErrorMessage name="channel"/>
        </div>

        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field as="textarea" id="comments" name="comments"/>
          <ErrorMessage name="comments"/>
        </div>

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field name="address">
            {
              (props) => console.log(props)
            }
          </Field>
          <ErrorMessage  name="address"/>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;