import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import TextError from "./TextError";

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
  address: Yup.string().required('Address is required'),
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
          <ErrorMessage name="name" component={TextError}/>
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field type="email" id="email" name="email"/>
          <ErrorMessage name="email" component={TextError}/>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel"/>
          <ErrorMessage name="channel" component={TextError}/>
        </div>

        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field as="textarea" id="comments" name="comments"/>
          <ErrorMessage name="comments" component={TextError}/>
        </div>

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field name="address">
            {
              (props) => {
                const {field, form, meta} = props
                return (
                  <div>
                    <input type="text" id="address" {...field}/>
                    {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
                  </div>
                )
              }
            }
          </Field>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;