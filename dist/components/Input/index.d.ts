import { FC, ReactElement, InputHTMLAttributes } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
declare type InputSize = 'large' | 'small';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
    disabled?: boolean;
    size?: InputSize;
    icon?: IconProp;
    prepose?: string | ReactElement;
    postposition?: string | ReactElement;
}
export declare const Input: FC<InputProps>;
export default Input;
