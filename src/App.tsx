import './style/index.scss';
import Button from './components/Button';
import Menu from './components/Menu/index';
import MenuItem from './components/Menu/Item';
import SubMenu from './components/Menu/subMenu';
import Input from "./components/Input";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Transition from './components/Transition';
import { useState } from 'react';
library.add( fas )
const React = require('react');

function App() {
  const [ show, setShow ] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Menu mode='horizontal' defaultIndex='0' onSelect={ (index) => {alert(index)}} className="lee-menu" defaultOpenSubMenus={['2']}>
          <MenuItem >
            cool link
          </MenuItem>
          <MenuItem disabled>
            cool link 2
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>
              dropdown 1
            </MenuItem>
            <MenuItem>
              dropdown 2
            </MenuItem>
          </SubMenu>
          <MenuItem >
            cool link 3
          </MenuItem>
        </Menu>
        <Button onClick={ () => { setShow(!show) } } size='large'> Toggle </Button>
        <Transition
          in={show}
          timeout={300}
          animation="zoom-in-left"
        >
          <p>Hello World Hello World Hello World Hello World Hello World Hello World</p>
        </Transition>
        <Transition
          in={show}
          timeout={300}
          animation="zoom-in-left"
          wrapper
        >
          <Button btnType='danger' size='large' >A large Button</Button>
        </Transition>
        <Input size="large"></Input>
        <Input icon="mail-bulk"></Input>
        <Input size="small"></Input>
      </header>
    </div>
  );
}

export default App;
