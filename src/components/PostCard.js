import React from 'react';
import Card from './Card';

const CardExampleCardProps = ({ post }) => {
  return (
    <>
      <div //style={{ border: '5px solid red', height: '200px'
      >
        <Card post={post} />
      </div>
    </>
  );
};

export default CardExampleCardProps;
