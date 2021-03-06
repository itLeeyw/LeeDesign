import React, { useContext, useState, FunctionComponentElement } from 'react';
import { MenuContext} from './index';
import { MenuItemProps } from './Item';
import Icon from '../Icon';
import Transition from '../Transition'
const classNames = require('classnames');

export interface SubMenuProps {
    index?: string;
    title: string;
    className?: string;
}

const SubMenu: React.FC<SubMenuProps> = ({ index, title, children, className }) => {
    const context = useContext(MenuContext);
    const openedSubMenus = context.defaultOpenSubMenus as Array<string>;
    const isOpend = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false;
    const [ menuOpen, setOpen] = useState(isOpend);

    const classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index,
        'is-opened': menuOpen,
        'is-vertical': context.mode === 'vertical'
    })

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setOpen(!menuOpen);
    }

    
    let timer: any;
    const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
        clearTimeout(timer);
        e.preventDefault();
        timer = setTimeout(() => {
            setOpen(toggle);
        }, 100)
    }
    const clickEvents = context.mode === 'vertical' ? {
        onClick: handleClick
    } : {};
    const hoverEvents = context.mode !== 'vertical' ? {
        onMouseEnter: (e: React.MouseEvent) => { handleMouse(e,true);},
        onMouseLeave: (e: React.MouseEvent) => { handleMouse(e,false);}
    } : {}

    const renderChildren = ()=> {
        const subMenuClasses = classNames('lee-submenu', {
            'menu-opened': menuOpen
        })
        const childrenComponent = React.Children.map(children, (child:React.ReactNode, i: number) => {
            const childElement = child as FunctionComponentElement<MenuItemProps>;
            if (childElement.type.displayName === 'MenuItem') {
                return React.cloneElement(childElement, {
                    index: `${index}-${i}`
                });
            } else {
                console.error("Warning: Menu has a child which is not a MenuItem component");
            }
        })
        return (
            <Transition 
                in={menuOpen}
                timeout={300}
                animation="zoom-in-top"
            >
                <ul className={subMenuClasses}>
                    {childrenComponent}
                </ul>
            </Transition>
        )
    }
    return (
        <li key={index} className={classes} {...hoverEvents}>
            <div className="submenu-title" {...clickEvents}>
                {title}
                <Icon icon="angle-down" className="arrow-icon"  rotation={90} />
            </div>
            {renderChildren()}
        </li>
    )
}

SubMenu.displayName = 'SubMenu';
export default SubMenu;
