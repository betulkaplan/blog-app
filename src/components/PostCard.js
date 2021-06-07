import React from 'react';
import { Card, Icon, Button } from 'semantic-ui-react';

const extra = (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}
  >
    <a>
      <Icon name="heart outline" />0
    </a>
    <a>
      <Icon name="comment outline" />0
    </a>
  </div>
);

const CardExampleCardProps = ({ post }) => {
  if (post.banner !== '') {
    console.log('URL VAR', post.banner);
  }
  console.log(post);
  return (
    <Card
      centered
      column
      image={post.banner}
      header={post.title}
      meta={post.author}
      description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
      extra={extra}
    />
  );
};

export default CardExampleCardProps;
