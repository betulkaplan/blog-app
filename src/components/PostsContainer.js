import React from 'react';
import { Grid } from 'semantic-ui-react';
import PostCard from './PostCard';

const GridExampleRelaxed = ({ posts }) => (
  <Grid relaxed columns={4}>
    {posts.map((post) => (
      <Grid.Column>
        <PostCard post={post} />
      </Grid.Column>
    ))}
  </Grid>
);

export default GridExampleRelaxed;
