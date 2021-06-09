import React, { useState, useContext } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import { loginUser } from '../firebase/auth';
import { AuthContext } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';

const FormExampleSuccess = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = () => {
    loginUser(email, password, () => history.push('/'));
  };
  return (
    <div style={{ width: '500px', margin: 'auto' }}>
      {!currentUser ? (
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
          <Button type="submit">Login</Button>
        </Form>
      ) : (
        <h2>Your are allready logged in</h2>
      )}
    </div>
  );
};

export default FormExampleSuccess;
