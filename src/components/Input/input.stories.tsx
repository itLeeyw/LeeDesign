import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Input, InputProps } from './index';
export default {
    title: 'Components/Input',
    component: Input,
    argTypes: {
        defaultValue: {
            description: `***输入框默认内容***`
        },
        disabled: {
            description: `***是否禁用状态，默认为 false***`
        },
        size: {
            description: `***控件大小***`
        },
        prepose: {
            description: `***带有前缀图标的 input***`
        },
        postposition: {
            description: `***带有后缀图标的 input***`
        },
        icon: {
            description: `***控件图标***`
        }
    },  
    parameters: {
        docs: { 
            description: { 
                component: 
`
### 通过鼠标或键盘输入内容，是最基础的表单域的包装。
## 何时使用
* 需要用户输入表单域内容时。
* 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

## 引用Input组件
~~~js
import { Input } from 'lee-design';
~~~
`
            } 
        },
        
      }
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;
export const InputAPI = Template.bind({});
InputAPI.args = {
    defaultValue: 'Input 组件',
}

export const InputSize = () => (
    <>
        <p>
            我们为 <strong>&lt;Input /&gt;</strong> 输入框定义了三种尺寸（大、默认、小），高度分别为 <b>46px</b>、<b>36px </b><b>28px</b> 和 。
        </p>
        <Input size="large" defaultValue="Large 输入框..."></Input>
        <Input defaultValue="中等 输入框..."></Input>
        <Input size="small" defaultValue="Small 输入框..."></Input>
    </>
);
InputSize.storyName='输入框类型';

export const PrePost = () => (
    <>
    <p>
        前置/后置标签
        用于配置一些固定组合。
    </p>
    <Input prepose="https://" defaultValue="MySite"></Input>
    <Input prepose="https://" defaultValue="MySite" postposition=".com"></Input>
    <Input defaultValue="MyE-mail" icon="mail-bulk"></Input>
    </>
)
PrePost.storyName='前置/后置标签';
export const ButtonFAQ = () => (
    <>
        <p>
        暂无~
        </p>
    </>
);

ButtonFAQ.storyName='FAQ';