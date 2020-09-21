import React, { createContext, useState, cloneElement, FC } from 'react';
import classNames from 'classnames';
import {MenuItemProps} from './Item';

type SelectCallback = (selectIndex: string) => void;
type MenuMode = 'horizontal' | 'vertical';
export interface MenuProps {
    defaultIndex?: string;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: SelectCallback;
    defaultOpenSubMenus?: string[];
}

interface IMenuContext {
    index: string;
    onSelect?: SelectCallback;
    mode?: MenuMode;
    defaultOpenSubMenus?: string[];
}
export const MenuContext = createContext<IMenuContext>({index: '0'});
const Menu: React.FC<MenuProps> = (props) => {
    const {
        className,
        mode,
        style,
        children,
        defaultIndex,
        onSelect,
        defaultOpenSubMenus
    } = props;
    const handleClick  = (index: string) => {
        setActive(index);
        if(onSelect) {
            onSelect(index);
        }
    }
    const [currentActive, setActive] = useState(defaultIndex);
    const classes = classNames('lee-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode === 'horizontal'
    })
    const passedContext: IMenuContext = {
        index: currentActive ? currentActive : '0',
        onSelect: handleClick,
        mode,
        defaultOpenSubMenus,
    }
    const renderChilder = () => {
        return React.Children.map(children, (child:React.ReactNode, index: number) => {
            const childElement = child as React.FunctionComponentElement<MenuItemProps>;
            const { displayName } = childElement.type;
            if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                return cloneElement(childElement, {
                    index:`${index}`
                })
            } else {
                console.error("Warning: Menu has a child which is not a MenuItem component");
            }
        })
    }
    return (
        <ul className={classes} style={style} data-testid="test-menu">
            <MenuContext.Provider value = {passedContext}>
            {renderChilder()}
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal',
    defaultOpenSubMenus: [],
}
export default Menu;
