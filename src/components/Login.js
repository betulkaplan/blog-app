import React, { useState } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import { loginUser } from '../firebase/auth';

const FormExampleSuccess = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => {
    loginUser(email, password);
  };
  return (
    <div style={{ width: '500px', margin: 'auto' }}>
      <Form onSubmit={handleSubmit}>
        <Form.Input
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
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default FormExampleSuccess;
