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
      {/* <Form
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
      </Form> */}

      <div className="formik-container">
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            agree: false,
            url: '',
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Name cannot be left empty'),
            email: Yup.string().email().required('Email cannot be left empty'),
            agree: Yup.boolean()
              .required('You have to agree to register')
              .oneOf([true], 'The terms and conditions must be accepted.'),
            password: Yup.string()
              .min(6, 'Password must be min 6 chars')
              .required('Password is required'),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref('password'), null], 'Password must match')
              .required('Confirm password is required'),
          })}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            console.log(values.agree);
            createUser(values.email, values.password, values.name, values.url);
            setSubmitting(false);
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
                label="Profile Picture URL"
                id="url"
                type="input"
                placeholder="URL"
                className="input"
                value={values.url}
                onChange={handleChange}
              />
              {errors.url && touched.url && (
                <div style={{ color: 'red' }}>{errors.url}</div>
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
              <Form.Input
                label="Password"
                id="password"
                type="password"
                placeholder="Your password..."
                className="input"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && touched.password && (
                <div style={{ color: 'red' }}>{errors.password}</div>
              )}
              <Form.Input
                label="Confirm Password"
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password..."
                className="input"
                value={values.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <div style={{ color: 'red' }}>{errors.confirmPassword}</div>
              )}
              <input
                id="agree"
                name="agree"
                type="checkbox"
                value={values.agree}
                onChange={handleChange}
              />
              <label htmlFor="agree">
                I agree with the terms and conditions.
              </label>
              {errors.agree && touched.agree && (
                <div style={{ color: 'red' }}>{errors.agree}</div>
              )}{' '}
              <br />
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
