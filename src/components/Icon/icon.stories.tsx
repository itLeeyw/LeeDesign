import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Icon, { IconProps }  from './index';

export default {
    title: 'Components/Icon',
    component: Icon,
    argTypes: {
        icon: {
            description: `***设置 Font Awesome 中图标名称***`
        },
        theme: {
            description: `***设置 Font Awesome 中图标主题***`
        }
    },  
    // decorators:  [() => <div><Button btnType="primary">Primary Button</Button><Button btnType="default">Primary Button</Button><Button btnType='link' href="#">Link Button</Button><Button btnType="default" size="large">Large Button</Button><Button btnType="default" size="small">Small Button</Button></div>],
    parameters: {
        docs: { 
            description: { 
                component: 
`
### 语义化的矢量图形。使用Font Awesome图标组件库
## 引用Icon组件
~~~js
import { Icon } from 'lee-design';
~~~
使用方法与导入 Font Awesome 无差别。
*** tips: 组件库内图标所有版权归 Font Awesom 所有 ***
`
            } 
        },
        
      }
} as Meta;


const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const IconAPI = Template.bind({});

IconAPI.args = {
    icon: 'mail-bulk',
    theme: 'primary'
};


