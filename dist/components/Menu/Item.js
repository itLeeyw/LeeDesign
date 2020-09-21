import { useContext } from 'react';
import { MenuContext } from './index';
var React = require('react');
var classNames = require('classnames');
var MenuItem = function (props) {
    var index = props.index, disabled = props.disabled, 
    //className, 
    style = props.style, children = props.children;
    var context = useContext(MenuContext);
    var classes = classNames('menu-item', classNames, {
        'is-disabled': disabled,
        'is-active': context.index === index,
    });
    var handleClick = function () {
        if (context.onSelect && !disabled && (typeof index === 'string')) {
            context.onSelect(index);
        }
    };
    return (React.createElement("li", { className: classes, style: style, onClick: handleClick }, children));
};
MenuItem.displayName = 'MenuItem';
export default MenuItem;
