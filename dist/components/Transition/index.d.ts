/// <reference types="react" />
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
declare type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right';
interface TransitionProps {
    animation?: AnimationName;
    wrapper?: boolean;
}
declare type AnimationWithCSSTranProps = TransitionProps & CSSTransitionProps;
declare const Transition: React.FC<AnimationWithCSSTranProps>;
export default Transition;
