import React, { FC, ReactElement, InputHTMLAttributes } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import classNames from 'classnames';
import Icon from "../Icon";
type InputSize = 'large' | 'small';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'>{
    disabled ?: boolean;
    size ?: InputSize;
    icon ?: IconProp;
    prepose?: string | ReactElement;
    postposition?: string | ReactElement;
}

export const Input: FC<InputProps> = (props) => {
    const {
        disabled,
        size,
        icon,
        style,
        prepose,
        postposition,
        ...restProps
    } = props

    const classes = classNames('lee-input-wrapper', {
        [`input-size-${size}`]: size,
        'is-disabled': disabled,
        'input-group': prepose || postposition,
        'lee-input-group-prepose': prepose,
        'lee-input-group-postposition': postposition,
    })

    return (
        <div className={classes} style={style}>
            {prepose && <div className="lee-input-group-prepose">{prepose}</div>}
            {icon && <div className="icon-wrapper"><Icon icon={icon} title={"title"} /></div>}
            <input
                className="lee-input-inner"
                disabled={disabled}
                {...restProps}
            />
            {postposition && <div className="lee-input-group-postposition">{postposition}</div>}
        </div>
    )
}

Input.defaultProps = {
    defaultValue: '这里输入您的内容...',
    style:{width: '300px'},
}

export default Input;