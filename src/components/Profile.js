import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div>
      <Card centered>
        <Image src={`${currentUser?.photoURL}`} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{currentUser.displayName}</Card.Header>
          <Card.Meta>Joined in 2016</Card.Meta>
          <Card.Description>{currentUser.email}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button>Delete Account</Button>
          <Button>Edit Profile</Button>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Profile;
