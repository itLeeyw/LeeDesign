import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
export declare type ButtonSize = 'large' | 'small';
export declare type ButtonType = 'primary' | 'default' | 'danger' | 'link';
interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    href?: string;
    size?: ButtonSize;
    btnType?: ButtonType;
    children: React.ReactNode;
}
declare type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/***
 * 这是 Button 组件
 * ## Button header
 * ~~~js
 * import { Button } from 'lee-design';
 * ~~~
 */
export declare const Button: FC<ButtonProps>;
export default Button;
