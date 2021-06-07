import React, { useState } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import { createUser } from '../firebase/auth';

const FormExampleSuccess = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState('');

  const handleSubmit = () => {
    createUser(email, password, firstName + ' ' + lastName, photo);
  };

  return (
    <div style={{ width: '500px', margin: 'auto' }}>
      <Form onSubmit={handleSubmit}>
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
    </div>
  );
};

export default FormExampleSuccess;
