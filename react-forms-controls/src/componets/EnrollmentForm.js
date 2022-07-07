import React from 'react';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormControl from "./FormControl";

const EnrollmentForm = () => {
  const dropdownOptions = [
    {key: 'Select your course', value: ''},
    {key: 'React', value: 'react'},
    {key: 'Angular', value: 'angular'},
    {key: 'Vue', value: 'vue'},
  ]

  const checkboxOptions = [
    {key: 'HTML', value: 'html'},
    {key: 'CSS', value: 'css'},
    {key: 'JavaScript', value: 'javascript'},
  ]

  const initialValues = {
    email: '',
    bio: '',
    course: '',
    skills: [],
    courseDate: null
  }
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    bio: Yup.string().required('Required'),
    course: Yup.string().required('Required'),
    courseDate: Yup.date().required('Required').nullable()
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
            <FormControl control="textarea" label="Bio" name="bio"/>
            <FormControl control="select" label="Course" name="course" options={dropdownOptions}/>
            <FormControl control="checkbox" label="Your skillset" name="skills" options={checkboxOptions}/>
            <FormControl control="date" label="Course date" name="courseDate"/>
            <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
          </Form>
        )
      }}
    </Formik>
  );
};

export default EnrollmentForm;