import React from 'react';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormControl from "./FormControl";

const FormContainer = () => {
  const dropdownOptions = [
    {key: 'Select an option', value: ''},
    {key: 'Option 1', value: 'option1'},
    {key: 'Option 2', value: 'option2'},
    {key: 'Option 3', value: 'option3'},
  ]

  const radioOptions = [
    {key: 'Option 1', value: 'rOption1'},
    {key: 'Option 2', value: 'rOption2'},
    {key: 'Option 3', value: 'rOption3'},
  ]

  const checkboxOptions = [
    {key: 'Option 1', value: 'cOption1'},
    {key: 'Option 2', value: 'cOption2'},
    {key: 'Option 3', value: 'cOption3'},
  ]

  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkboxOption: '',
    birthDate: null,
  }
  const validationSchema = Yup.object({
    email: Yup.string().required('Email is required'),
    description: Yup.string().required('Description is required'),
    selectOption: Yup.string().required('SelectOption is required'),
    radioOption: Yup.string().required('RadioOption is required'),
    checkboxOption: Yup.array().required('CheckboxOption is required'),
    birthDate: Yup.date().required('Date is required').nullable(),
  })
  const onSubmit = values => {
    console.log('Form data',values)
    console.log("Saved data", JSON.parse(JSON.stringify(values))) //TODO >>>>> Need to add validation for JSON
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>

      {
        formik =>
          <Form>
            <FormControl control="input" type="email" name="email" label="Email"/>
            <FormControl control="textarea" name="description" label="Description"/>
            <FormControl control="select" name="selectOption" label="Select a topic" options={dropdownOptions}/>
            <FormControl control="radio" name="radioOption" label="Radio a topic" options={radioOptions}/>
            <FormControl control="checkbox" name="checkboxOption" label="Checkbox topics" options={checkboxOptions}/>
            <FormControl control="date" name="birthDate" label="Pick a date"/>
            <button type="submit">Submit</button>
         </Form>
      }

    </Formik>
  );
};

export default FormContainer;