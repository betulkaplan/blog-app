import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';

const FullContent = (props) => {
  console.log(props.location.post);
  const post = props.location.post;
  const history = useHistory();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (!currentUser) {
      alert('User is not signed in');
      history.push('/');
    }
  }, []);
  return (
    <div>
      {!currentUser ? null : (
        <>
          <h1>{post?.title}</h1>
          <h2>{post?.author}</h2>
          <h3>{post?.text}</h3>
          <h3>posttan gelen {post?.author}</h3>
          <h3>current user olan {currentUser?.email}</h3>
          {currentUser.email === post.author ? (
            <>
              <button>Delete</button>
              <button>Edit</button>
            </>
          ) : null}
        </>
      )}
    </div>
  );
};

export default FullContent;
