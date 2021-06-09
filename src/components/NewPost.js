import React, { useState, useContext } from 'react';
import { Form, Input, TextArea, Button, Image } from 'semantic-ui-react';
import { AuthContext } from '../context/AuthContext';
import image from '../assets/new-post.svg';
import { addPost } from '../firebase/auth';

const FormExampleFieldControlId = () => {
  const [title, setTitle] = useState();
  const [url, setUrl] = useState();
  const [text, setText] = useState();
  const { currentUser } = useContext(AuthContext);
  const handleSubmit = () => {
    addPost({
      title: title,
      url: url,
      text: text,
      author: currentUser.email,
    });
    setTitle('');
    setUrl('');
    setText('');
  };
  return (
    <div style={{ width: '600px', margin: 'auto' }}>
      <Image src={image} size="medium" centered />
      <h2>Add New Post</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Field
          value={title}
          id="form-input-control-first-name"
          control={Input}
          placeholder="Title*"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Form.Field
          value={url}
          id="form-input-control-last-name"
          control={Input}
          placeholder="Image URL*"
          onChange={(e) => setUrl(e.target.value)}
        />
        <Form.Field
          value={text}
          id="form-textarea-control-opinion"
          control={TextArea}
          placeholder="Content*"
          onChange={(e) => setText(e.target.value)}
        />
        <Form.Field
          id="form-button-control-public"
          control={Button}
          content="Submit"
        />
      </Form>
    </div>
  );
};

export default FormExampleFieldControlId;
