import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Menu, { MenuProps }  from './index';
import MenuItem from './Item';
import SubMenu from './subMenu';

export default {
    title: 'Components/Menu',
    component: Menu,
    argTypes: {
        defaultIndex: {
            description: `***默认高亮位置***`
        },
        className: {
            description: `***配置CSS样式***`
        },
        mode: {
            description: `***配置模式***`
        },
        style: {
            description: `***配置style样式***`
        },
        onSelect: {
            description: `***设置选择回调函数***`
        },
        defaultOpenSubMenus: {
            description: `***设置子菜单是否默认开启***`
        }

    },
    parameters: {
        docs: { 
            description: { 
                component: 
`
### 为页面和功能提供导航的菜单列表。 
## 何时使用
### 导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。
## 引用Menu组件
~~~js
import { Menu } from 'lee-design';
~~~
`
            }
        }
    }
} as Meta;
const Template: Story<MenuProps> = (args) => <Menu {...args} />;

export const MenuAPI = Template.bind({});
MenuAPI.args = {
};

export const horMenu = () => (
    <>
         <Menu mode='horizontal' defaultIndex='0' onSelect={ (index) => {alert(index)}} className="lee-menu" defaultOpenSubMenus={['2']}>
          <MenuItem >
            lee link
          </MenuItem>
          <MenuItem disabled>
          lee link 2
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
            lee link 3
          </MenuItem>
        </Menu>
    </>
)

horMenu.storyName='水平菜单'

export const verMenu = () => (
    <>
         <Menu mode='vertical' defaultIndex='0' onSelect={ (index) => {alert(index)}} className="lee-menu" defaultOpenSubMenus={['2']}>
          <MenuItem >
            lee link
          </MenuItem>
          <MenuItem disabled>
          lee link 2
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
            lee link 3
          </MenuItem>
        </Menu>
    </>
)

verMenu.storyName='垂直菜单'