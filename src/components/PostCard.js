import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const extra = (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}
  >
    <a href="/">
      <Icon name="heart outline" />0
    </a>
    <a href="/">
      <Icon name="comment outline" />0
    </a>
  </div>
);

const CardExampleCardProps = ({ post }) => {
  if (post.banner !== '') {
  }
  return (
    <Card
      centered
      column
      image={post.url}
      header={post.title}
      meta={post.author}
      description={post.text}
      extra={extra}
    />
  );
};

export default CardExampleCardProps;
