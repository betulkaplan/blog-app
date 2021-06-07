import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Dropdown, Menu, Label, Icon } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { signOut } from '../firebase/auth';

const MenuExampleSizeHuge = () => {
  const [state, setState] = useState({ activeItem: 'home' });
  const history = useHistory();

  const { currentUser } = useContext(AuthContext);

  const handleItemClick = (e, { name }) => {
    history.push('/');
    setState({ activeItem: name });
  };

  //const currentUser = false;

  const { activeItem } = state;

  return (
    <Menu size="huge">
      <Menu.Item
        name="bettythebeth"
        active={activeItem === 'home'}
        onClick={handleItemClick}
      />

      <Menu.Menu position="right">
        {currentUser !== undefined && currentUser !== null ? (
          <Menu.Item>
            <Label size="large" as="a">{`${currentUser?.displayName}`}</Label>
          </Menu.Item>
        ) : null}

        <Dropdown item icon="user">
          <Dropdown.Menu>
            {currentUser ? (
              <>
                <Dropdown.Item onClick={() => history.push('/new-post')}>
                  New Post
                </Dropdown.Item>
                <Dropdown.Item onClick={() => history.push('/profile')}>
                  Profile
                </Dropdown.Item>
                <Dropdown.Item onClick={signOut}>Logout</Dropdown.Item>
              </>
            ) : (
              <>
                <Dropdown.Item onClick={() => history.push('/login')}>
                  Login
                </Dropdown.Item>
                <Dropdown.Item onClick={() => history.push('/register')}>
                  Register
                </Dropdown.Item>
              </>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
};

export default MenuExampleSizeHuge;
