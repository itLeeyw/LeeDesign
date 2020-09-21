import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
export { default as Button } from './components/Button';
export { default as Menu } from './components/Menu/_index';
export { default as Input } from './components/Input';
export { default as Icon } from './components/Icon';
export { default as Transition } from './components/Transition';
export { default as AutoComplete } from './components/AutoComplete';
library.add(fas);
