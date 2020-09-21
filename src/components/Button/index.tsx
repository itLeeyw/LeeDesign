import classNames from 'classnames';
import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';



export type ButtonSize = 'large' | 'small';


export type ButtonType = 'primary' | 'default' | 'danger' | 'link' ;

interface BaseButtonProps {
    className   ?: string;
    disabled    ?: boolean;
    href        ?: string;
    size        ?: ButtonSize;
    btnType     ?: ButtonType;
    children    :  React.ReactNode;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>; // Partial React中的一个方法，让两者类型都是可选的
/***
 * 这是 Button 组件
 * ## Button header
 * ~~~js
 * import { Button } from 'lee-design';
 * ~~~
 */
export const Button: FC<ButtonProps> = (props) => {
    const { 
        btnType,
        className,
        disabled,
        href,
        size,
        children,
        ...restProps
    } = props;
    // lee-btn, btn-large, btn-primary...
    
    const classes = classNames('lee-btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === 'link') && disabled
    })

    if (btnType === 'link' && href) {
        return (
            <a
              className = {classes}
              href = {href}
              {...restProps}
            >
                {children}
            </a>
        )
    } else {
        return (
            <button
              className = {classes}
              disabled={disabled}
              {...restProps}
            >
                {children}
            </button>
        )
    }
}


Button.defaultProps = {
    disabled: false,
    btnType: 'default'
}

export default Button;