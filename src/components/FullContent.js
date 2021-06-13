import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';
import { deleteHandler, editHandler } from '../firebase/auth';
import { Form, Input, TextArea } from 'semantic-ui-react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const FullContent = (props) => {
  const classes = useStyles();
  const post = props.location.post;
  const history = useHistory();
  const { currentUser } = useContext(AuthContext);
  const [edit, setEdit] = useState(false);

  const [title, setTitle] = useState(post?.title);
  const [url, setUrl] = useState(post?.url);
  const [text, setText] = useState(post?.text);

  const [isEditting, setIsEditting] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      alert('User is not signed in');
      history.push('/');
    }
  }, []);
  return (
    <div>
      <img src={post.url} alt="" />
      {edit ? (
        <Form
          onSubmit={() => {
            setIsEditting(false);
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </Form>
      ) : null}
      {!currentUser ? null : (
        <>
          <h1>{post?.title}</h1>
          <h2>{post?.author}</h2>
          <h3>{post?.text}</h3>
          {currentUser.email === post.author ? (
            <>
              {!isEditting ? (
                <>
                  <Button
                    onClick={() => {
                      deleteHandler(post?.id);
                      history.push('/');
                    }}
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>

                  <Button
                    onClick={() => {
                      setIsEditting(true);
                      setEdit(!edit);
                      console.log('edit');
                    }}
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<EditIcon />}
                  >
                    Edit
                  </Button>
                </>
              ) : null}
            </>
          ) : null}
        </>
      )}
    </div>
  );
};

export default FullContent;
