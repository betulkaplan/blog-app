import React from 'react';
import { Form, Input, TextArea, Button, Image } from 'semantic-ui-react';
import image from '../assets/new-post.svg';

const FormExampleFieldControlId = () => (
  <div style={{ width: '600px', margin: 'auto' }}>
    <Image src={image} size="medium" centered />
    <h2>Add New Post</h2>
    <Form>
      <Form.Field
        id="form-input-control-first-name"
        control={Input}
        placeholder="Title*"
      />
      <Form.Field
        id="form-input-control-last-name"
        control={Input}
        placeholder="Image URL*"
      />
      <Form.Field
        id="form-textarea-control-opinion"
        control={TextArea}
        placeholder="Content*"
      />
      <Form.Field
        id="form-button-control-public"
        control={Button}
        content="Submit"
      />
    </Form>
  </div>
);

export default FormExampleFieldControlId;
