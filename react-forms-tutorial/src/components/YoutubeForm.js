import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from "formik";
import * as Yup from 'yup';
import TextError from "./TextError";

const initialValues = {
  name: '',
  email: '',
  channel: '',
  comments: '',
  address: '',
  social: {
    facebook: '',
    twitter: '',
  },
  phoneNumbers: ['',''],
  phNumbers: ['']
}

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  channel: Yup.string().required('Channel is required'),
  comments: Yup.string(),
  address: Yup.string().required('Address is required'),
})

const onSubmit = values => console.log(values)

const validateComments = value => {
  let error
  if (!value) {
    error = 'Comments is required'
  }
  return error
}

const YoutubeForm = () => {
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    // validateOnChange={false} //TODO ->>> validateComments
    // validateOnBlur={false}
    >

      {
        formik => {
          console.log(formik)
          return (
            <Form>
              <div className="form-control">
                <label htmlFor="name">Name</label>
                <FastField type="text" id="name" name="name"/>
                <ErrorMessage name="name" component={TextError}/>
              </div>

              <div className="form-control">
                <label htmlFor="email">E-mail</label>
                <FastField type="email" id="email" name="email"/>
                <ErrorMessage name="email" component={TextError}/>
              </div>

              <div className="form-control">
                <label htmlFor="channel">Channel</label>
                <FastField type="text" id="channel" name="channel"/>
                <ErrorMessage name="channel" component={TextError}/>
              </div>

              <div className="form-control">
                <label htmlFor="comments">Comments</label>
                <FastField as="textarea" id="comments" name="comments" validate={validateComments}/>
                <ErrorMessage name="comments" component={TextError}/>
              </div>

              <div className="form-control">
                <label htmlFor="address">Address</label>
                <FastField name="address">
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
                </FastField>
              </div>

              <div className="form-control">
                <label htmlFor="facebook">Facebook profile</label>
                <FastField type="text" id="facebook" name="social.facebook" />
              </div>

              <div className="form-control">
                <label htmlFor="twitter">Twitter profile</label>
                <FastField type="text" id="twitter" name="social.twitter" />
              </div>

              <div className="form-control">
                <label htmlFor="primaryPh">Primary Phone</label>
                <FastField type="text" id="primaryPh" name="phoneNumbers[0]"/>
              </div>

              <div className="form-control">
                <label htmlFor="secondaryPh">Secondary Phone</label>
                <FastField type="text" id="secondaryPh" name="phoneNumbers[1]" />
              </div>

              <div className="form-control">
                <label>List of numbers</label>
                <FieldArray name='phNumbers'>
                  {
                    (props) => {
                      const { push, remove, form } = props
                      const { values } = form
                      const { phNumbers } = values

                      return <div>{phNumbers.map( (item, index) => (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`}/>
                          { index > 0 && <button type="button" onClick={() => remove(item)}> - </button>}
                          <button type="button" onClick={() => push(item)}> + </button>
                        </div>
                      ))}</div>
                    }
                  }
                </FieldArray>
              </div>

              <button type="button" onClick={() => formik.validateField('comments')}>Validate Comments</button>
              <button type="button" onClick={() => formik.validateForm()}>Validate All</button>
              <button type="button" onClick={() => formik.setFieldTouched('comments')}>Visit Comments</button>
              <button type="button" onClick={() => formik.setTouched({
                name: true,
                email: true,
                comments: true,
                channel: true,
                address: true,
              })}>Visit All</button>
              <button type="submit">Submit</button>
            </Form>
          )
        }
      }

    </Formik>
  );
};

export default YoutubeForm;