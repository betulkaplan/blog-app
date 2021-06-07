import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const extra = (
  <a>
    <Icon name="user" />
    16 Friends
  </a>
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
