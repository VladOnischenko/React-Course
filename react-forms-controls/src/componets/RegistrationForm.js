import React from 'react';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormControl from "./FormControl";

const RegistrationForm = () => {
  const options = [
    {key: 'Email', value: 'emailmoc'},
    {key: 'Telephone', value: 'telephonemoc'},
  ]

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    modeOfContact: '',
    phone: '',
  }
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Password must match').required('Confirm Password'),
    modeOfContact: Yup.string().required('Required'),
    phone: Yup.string().when('modeOfContact', {
      is: 'telephonemoc',
      then: Yup.string().required('Telephone is required')
    })
  })
  const onSubmit = (values) => console.log("Submit", values)

  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
      {formik => {
          return (
            <Form>
              <FormControl control="input" type="email" label="Email" name="email"/>
              <FormControl control="input" type="password" label="Password" name="password" autoComplete="on"/>
              <FormControl control="input" type="password" label="Confirm Password" name="confirmPassword" autoComplete="on"/>
              <FormControl control="radio" label="Mode of contact" name="modeOfContact" options={options}/>
              <FormControl control="input" type="text" label="Phone number" name="phone" />
              <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
            </Form>
          )
        }}
    </Formik>
  );
};

export default RegistrationForm;