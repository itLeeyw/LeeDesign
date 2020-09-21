import { FC } from 'react';
import { MenuProps } from './index';
import { MenuItemProps } from './Item';
import { SubMenuProps } from './subMenu';
export declare type IMenuComponent = FC<MenuProps> & {
    Item: FC<MenuItemProps>;
    SubMenu: FC<SubMenuProps>;
};
declare const TransMenu: IMenuComponent;
export default TransMenu;
