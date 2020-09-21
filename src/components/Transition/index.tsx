import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

const React = require('react');

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right';

interface TransitionProps{
    animation?: AnimationName,
    wrapper?: boolean
}
type AnimationWithCSSTranProps = TransitionProps & CSSTransitionProps

const Transition: React.FC<AnimationWithCSSTranProps> = (props) => {
    const {
        children,
        classNames,
        animation,
        wrapper,
        ...restProps
    } = props;
    return (
        <CSSTransition
            classNames= { classNames? classNames: animation}
            {...restProps}
        >
            {wrapper ? <div>{children}</div> : children}
        </CSSTransition>
    )
}

Transition.defaultProps = {
    unmountOnExit: true,
    appear: true,
}

export default Transition;