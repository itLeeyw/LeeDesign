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
library.add(fas);
var React = require('react');
function App() {
    var _a = useState(false), show = _a[0], setShow = _a[1];
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement(Menu, { mode: 'horizontal', defaultIndex: '0', onSelect: function (index) { alert(index); }, className: "lee-menu", defaultOpenSubMenus: ['2'] },
                React.createElement(MenuItem, null, "cool link"),
                React.createElement(MenuItem, { disabled: true }, "cool link 2"),
                React.createElement(SubMenu, { title: "dropdown" },
                    React.createElement(MenuItem, null, "dropdown 1"),
                    React.createElement(MenuItem, null, "dropdown 2")),
                React.createElement(MenuItem, null, "cool link 3")),
            React.createElement(Button, { onClick: function () { setShow(!show); }, size: 'large' }, " Toggle "),
            React.createElement(Transition, { in: show, timeout: 300, animation: "zoom-in-left" },
                React.createElement("p", null, "Hello World Hello World Hello World Hello World Hello World Hello World")),
            React.createElement(Transition, { in: show, timeout: 300, animation: "zoom-in-left", wrapper: true },
                React.createElement(Button, { btnType: 'danger', size: 'large' }, "A large Button")),
            React.createElement(Input, { size: "large" }),
            React.createElement(Input, { icon: "mail-bulk" }),
            React.createElement(Input, { size: "small" }))));
}
export default App;
