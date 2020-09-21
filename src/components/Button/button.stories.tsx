import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './index';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        btnType: {
            description: '***按钮类型***'
        },
        children: {
            description: '***按钮内容***'
        },
        className: {
            description: `***按钮样式(自定义)***`
        },
        disabled: {
            description: `***按钮是否禁用***`
        },
        size: {
            description: `***按钮大小***`
        },
        href: {
            description: `***Link跳转链接***`
        }
    },  
    // decorators:  [() => <div><Button btnType="primary">Primary Button</Button><Button btnType="default">Primary Button</Button><Button btnType='link' href="#">Link Button</Button><Button btnType="default" size="large">Large Button</Button><Button btnType="default" size="small">Small Button</Button></div>],
    parameters: {
        docs: { 
            description: { 
                component: 
`### 按钮用于开始一个即时操作。 
## 何时使用
### 标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
## 引用Button组件
~~~js
import { Button } from 'lee-design';
~~~
### 在 Lee Design 中我们提供了4种按钮。
* 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
* 默认按钮：用于没有主次之分的一组行动点。
* 链接按钮：用于作为外链的行动点。
* 危险：删除/移动/修改权限等危险操作，一般需要二次确认。

### 以及3种状态属性与上面配合使用。
* 禁用：行动点不可用的时候，一般需要文案解释。
* 大号：是默认按钮1.25倍，一般做强调作用。
* 小号: 是默认按钮小0.875倍，一般作为提示。

***支持原生 button 的其他所有属性。***
`
            } 
        },
        
      }
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const ButtonAPI = Template.bind({});
ButtonAPI.args = {
    children: 'Button',
    btnType: 'primary',
};


export const ButtonType = () => (
    <>
        <p>
            按钮有四种类型：默认按钮、主按钮、链接按钮和危险按钮。主按钮在同一个操作区域最多出现一次。
        </p>
        <Button btnType="default">Default Button</Button>
        <Button btnType="primary">Primary Button</Button>
        <Button btnType="link">Link Button</Button>        
        <Button btnType="danger">Danger Button</Button>
    </>
);

ButtonType.storyName='按钮类型';

export const ButtonSize = () => (
    <>
        <p>
        按钮有大、中(默认)、小三种尺寸。
        通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。
        </p>
        <Button btnType="default" size="large">Large Button</Button>
        <Button btnType="default" >Default Button</Button>
        <Button btnType="default" size="small">Small Button</Button>
    </>
);

ButtonSize.storyName='按钮尺寸';

export const ButtonDisabled = () => (
    <>
        <p>
        添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
        </p>      
        <Button disabled btnType="default">Default Button</Button>
        <Button disabled btnType="primary">Primary Button</Button>
        <Button disabled btnType="link">Link Button</Button>        
        <Button disabled btnType="danger">Danger Button</Button>
        <Button disabled btnType="default" size="large">Large Button</Button>
        <Button disabled btnType="default" >Default Button</Button>
        <Button disabled btnType="default" size="small">Small Button</Button>
    </>
);

ButtonDisabled.storyName='不可用状态';


export const ButtonFAQ = () => (
    <>
        <p>
        暂无~
        </p>
    </>
);

ButtonFAQ.storyName='FAQ';