import React, { useState } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import { createUser } from '../firebase/auth';
import { Formik } from 'formik';
import * as Yup from 'yup';

const FormExampleSuccess = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState('');

  // const handleSubmit = () => {
  //   createUser(email, password, firstName + ' ' + lastName, photo);
  // };

  return (
    <div style={{ width: '500px', margin: 'auto' }}>
      <Form
      //onSubmit={handleSubmit}
      >
        <Form.Input
          label="First Name"
          placeholder="Your first name..."
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Form.Input
          label="Second Name"
          placeholder="Your Secondname"
          onChange={(e) => setLastName(e.target.value)}
        />
        <Form.Input
          label="Photo Url"
          placeholder="Photo Url"
          onChange={(e) => setPhoto(e.target.value)}
        />
        <Form.Input
          type="email"
          label="Email"
          placeholder="joe@schmoe.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Input
          type="password"
          label="Password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Message
          success
          header="Form Completed"
          content="You're all signed up for the newsletter"
        />
        <Button type="submit">Register</Button>
      </Form>

      <div className="formik-container">
        <Formik
          initialValues={{
            name: '',
            email: '',
            agree: false,
            url: '',
          }}
          validationSchema={Yup.object({
            name: Yup.string().required('Name cannot be left empty'),
            email: Yup.string().email().required('Email cannot be left empty'),
            agree: Yup.boolean().required('You have to agree to register'),
          })}
          onSubmit={(values, { resetForm, setSubmittin }) => {
            console.log(values);
            //createUser(values.email, password, firstName + ' ' + lastName, photo);
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleSubmit,
            handleReset,
            dirty,
            touched,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              <h3>Kaydol</h3>
              <Form.Input
                label="First Name"
                id="name"
                type="input"
                placeholder="Name..."
                className="input"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && touched.name && (
                <div style={{ color: 'red' }}>{errors.name}</div>
              )}

              <Form.Input
                label="Email"
                id="email"
                type="email"
                placeholder="xxx@yourdomain.com"
                className="input"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && touched.email && (
                <div style={{ color: 'red' }}>{errors.email}</div>
              )}
              <input
                id="agree"
                type="checkbox"
                value={values.agree}
                onChange={handleChange}
                disabled={!dirty || isSubmitting}
              />
              <label htmlFor="agree">
                I agree with the terms and conditions.
              </label>
              <Button type="submit" disabled={!dirty || isSubmitting}>
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormExampleSuccess;
