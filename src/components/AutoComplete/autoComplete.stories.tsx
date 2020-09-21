import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import AutoComplete, { AutoCompleteProps, DataSourceType } from './index'

interface LakerPlayerProps {
    value: string;
    number: number;
}
// const lakers = ['bra', 'pop', 'car', 'cook', 'jam', 'AD', 'gre', 'how', 'Mcg']
const lakerWithNumber = [
    {value: 'bra', number: 121},
    {value: 'pop', number: 141},
    {value: 'car', number: 111},
    {value: 'jam', number: 311},
    {value: 'Mcg', number: 411}
]
// const handleFetch = (query: string) => {
//     return lakers.filter(name => name.includes(query));
// }

const handleFetch = (query: string) => {
    return lakerWithNumber.filter(player => player.value.includes(query));
}

// const handleFetch = (query: string) => {
//     return fetch(`url?q=${query}`)
//             .then(res => res.json())
//             .then(({items}) => {
//                 console.log(items);
//                 const forematItems = items.slice(0, 10).map(item => ({value: item.xxx, ...item}));
//                 console.log(forematItems);
//             })
// }

export default {
    title: 'Components/AutoComplete',
    component: AutoComplete,
    argTypes: {
        fetchSuggestions: {
            description: `***设置接收item类型***`
        },
        renderOption: {
            description: `***设置返回值***`
        },
        onSelect: {
            description: `***选择item资源***`
        },
        size: {
            description: `***input组件尺寸***`
        },
        disabled: {
            description: `***input组件是否可操作***`
        },
        icon: {
            description: `***设置icon提示***`
        },
        prepose: {
            description: `***input组件前置***`
        },
        postposition: {
            description: `***input组件后置***`
        }
    },
    parameters: {
        docs: {
            description: {
                component:
`
### 输入内容自动显示搜索内容组件
## 何时使用
### 在需要搜索相应内容时。
## 引用 AutoComplete 组件
~~~js
import { AutoComplete } from 'lee-design';
~~~
`
            }
        }
    }
} as Meta

const Template: Story<AutoCompleteProps> = (args) => <AutoComplete {...args} />;
export const AutoCompleteAPI = Template.bind({});
AutoCompleteAPI.args = {
    fetchSuggestions: handleFetch,
    renderOption: (item: DataSourceType<LakerPlayerProps>) => {
        return (
            <>
                <h2>name:{item.value}</h2>
                <p>Number : {item.number}</p>
            </>
        )
    }
}