import React from 'react';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormControl from "./FormControl";

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: ''
  }
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Name is required'),
    password: Yup.string().required('Password is required')
  })

  const onSubmit = (values) => console.log("Submit", values)

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {
        formik => {
          return (
            <Form >
              <FormControl control="input" type="email" label="Email" name="email"/>
              <FormControl control="input" type="password" label="Password" name="password" autoComplete="on"/>
              <button type="reset">Reset</button>
              <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
            </Form>
          )
        }
      }
    </Formik>
  );
};

//TODO --->>> password should have ( autoComplete="on" )
// ADD validation characters for password

export default LoginForm;