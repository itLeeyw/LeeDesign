import classNames from 'classnames';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'; 

const React = require('react');

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';

export interface IconProps extends FontAwesomeIconProps {
    theme ?: ThemeProps
}

const Icon: React.FC<IconProps> = (props) => {
    // icon-primary
    const { className, theme, style, ...restProps} = props;
    const classes = classNames('lee-icon', className, {
        [`icon-${theme}`]: theme
    })
    return (
        <FontAwesomeIcon height='32' width='32' viewBox="0 0 350 350" style={style} className={classes} {...restProps} />
    )
}

Icon.defaultProps = {
    
}
export default Icon;