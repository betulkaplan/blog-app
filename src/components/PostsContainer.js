import React, { useEffect, useState } from 'react';
import firebase from '../firebase/auth';
import { Grid } from 'semantic-ui-react';
import PostCard from './PostCard';

const GridExampleRelaxed = () => {
  const { postList, isLoading } = useFetch();
  console.log('yüklenen postlar: ', postList);
  return (
    <Grid relaxed columns={4}>
      {isLoading ? (
        <h2>Loading</h2>
      ) : (
        <>
          {postList?.map((post) => (
            <Grid.Column>
              <PostCard post={post} />
            </Grid.Column>
          ))}
        </>
      )}
    </Grid>
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
