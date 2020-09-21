var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import classNames from 'classnames';
import Icon from "../Icon";
export var Input = function (props) {
    var _a;
    var disabled = props.disabled, size = props.size, icon = props.icon, style = props.style, prepose = props.prepose, postposition = props.postposition, restProps = __rest(props, ["disabled", "size", "icon", "style", "prepose", "postposition"]);
    var classes = classNames('lee-input-wrapper', (_a = {},
        _a["input-size-" + size] = size,
        _a['is-disabled'] = disabled,
        _a['input-group'] = prepose || postposition,
        _a['lee-input-group-prepose'] = prepose,
        _a['lee-input-group-postposition'] = postposition,
        _a));
    return (React.createElement("div", { className: classes, style: style },
        prepose && React.createElement("div", { className: "lee-input-group-prepose" }, prepose),
        icon && React.createElement("div", { className: "icon-wrapper" },
            React.createElement(Icon, { icon: icon, title: "title" })),
        React.createElement("input", __assign({ className: "lee-input-inner", disabled: disabled }, restProps)),
        postposition && React.createElement("div", { className: "lee-input-group-postposition" }, postposition)));
};
Input.defaultProps = {
    defaultValue: '这里输入您的内容...',
    style: { width: '300px' },
};
export default Input;
