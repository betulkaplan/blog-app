import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';
import { deleteHandler, editHandler } from '../firebase/auth';
import { Form, Input, TextArea, Button, Image } from 'semantic-ui-react';

const FullContent = (props) => {
  console.log(props.location.post);
  const post = props.location.post;
  const history = useHistory();
  const { currentUser } = useContext(AuthContext);
  const [edit, setEdit] = useState(false);

  const [title, setTitle] = useState(post?.title);
  const [url, setUrl] = useState(post?.url);
  const [text, setText] = useState(post?.text);

  useEffect(() => {
    console.log(post?.id);

    if (!currentUser) {
      alert('User is not signed in');
      history.push('/');
    }
  }, []);
  return (
    <div>
      {edit ? (
        <Form
          onSubmit={() => {
            editHandler(post);
            history.push('/');
          }}
        >
          <Form.Field
            value={title}
            id="form-input-control-first-name"
            control={Input}
            placeholder="Title*"
            onChange={(e) => {
              setTitle(e.target.value);
              post.title = e.target.value;
            }}
          />
          <Form.Field
            value={url}
            id="form-input-control-last-name"
            control={Input}
            placeholder="Image URL*"
            onChange={(e) => {
              setUrl(e.target.value);
              post.url = e.target.value;
            }}
          />
          <Form.Field
            value={text}
            id="form-textarea-control-opinion"
            control={TextArea}
            placeholder="Content*"
            onChange={(e) => {
              setText(e.target.value);
              post.text = e.target.value;
            }}
          />
          <Form.Field
            id="form-button-control-public"
            control={Button}
            content="Submit"
          />
        </Form>
      ) : null}
      {!currentUser ? null : (
        <>
          <h1>{post?.title}</h1>
          <h2>{post?.author}</h2>
          <h3>{post?.text}</h3>
          {currentUser.email === post.author ? (
            <>
              <button
                onClick={() => {
                  deleteHandler(post?.id);
                  history.push('/');
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setEdit(!edit);
                  console.log('edit');
                }}
              >
                Edit
              </button>
            </>
          ) : null}
        </>
      )}
    </div>
  );
};

export default FullContent;
