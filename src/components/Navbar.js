import React, { useState } from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

const MenuExampleSizeHuge = () => {
  const [state, setState] = useState({ activeItem: 'home' });
  const history = useHistory();

  const handleItemClick = (e, { name }) => {
    history.push('/');
    setState({ activeItem: name });
  };

  const { activeItem } = state;

  return (
    <Menu size="huge">
      <Menu.Item
        name="bettythebeth"
        active={activeItem === 'home'}
        onClick={handleItemClick}
      />

      <Menu.Menu position="right">
        <Dropdown item icon="user">
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => history.push('/new-post')}>
              New Post
            </Dropdown.Item>
            <Dropdown.Item>Login</Dropdown.Item>
            <Dropdown.Item>Register</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
};

export default MenuExampleSizeHuge;
