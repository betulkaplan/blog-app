import React, { useEffect, useState } from 'react';
import firebase from '../firebase/auth';
import { Grid } from 'semantic-ui-react';
import PostCard from './PostCard';

const GridExampleRelaxed = () => {
  const { postList, isLoading } = useFetch();
  return (
    <>
      <h1
        style={{ color: 'teal' }}
        class="MuiTypography-root MuiTypography-h2 MuiTypography-colorTextPrimary MuiTypography-gutterBottom MuiTypography-alignCenter"
      >
        DASHBOARD
      </h1>
      <Grid relaxed columns={4}>
        {isLoading ? (
          <h2>Loading</h2>
        ) : (
          <>
            {postList?.map((post, index) => (
              <Grid.Column className="centered">
                <PostCard post={post} key={index} />
              </Grid.Column>
            ))}
          </>
        )}
      </Grid>
    </>
  );
};

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [postList, setPostList] = useState();

  useEffect(() => {
    setIsLoading(true);
    const postsRef = firebase.database().ref('posts');
    postsRef.on('value', (snapshot) => {
      const posts = snapshot.val();
      const postArray = [];
      for (let id in posts) {
        postArray.push({ id, ...posts[id] });
      }
      setPostList(postArray);
      setIsLoading(false);
    });
  }, []);
  return { postList, isLoading };
};

export default GridExampleRelaxed;
