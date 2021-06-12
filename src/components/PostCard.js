import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import Cardx from './Card';

const extra = (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}
  >
    <a href="/" onClick={console.log('you cliked fav button')}>
      <Icon name="heart outline" />0
    </a>
    <a href="/">
      <Icon name="comment outline" />0
    </a>
  </div>
);

const CardExampleCardProps = ({ post }) => {
  const history = useHistory();
  const showContent = () => {
    history.push({
      pathname: '/full-content',
      post: post,
    });
  };
  if (post.banner !== '') {
  }
  return (
    <>
      {/* <Card
        onClick={(e) => {
          e.preventDefault();
          showContent();
        }}
        centered
        column
        image={post.url}
        header={post.title}
        meta={post.author}
        description={post.text}
        extra={extra}
      /> */}
      <>
        <Cardx post={post} />
      </>
    </>
  );
};

export default CardExampleCardProps;
