import Menu from './index';
import MenuItem from './Item';
import SubMenu from './subMenu';
var TransMenu = Menu;
TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;
export default TransMenu;
