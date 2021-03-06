import * as React from 'react';
			export default function anonymous(params
) {
var evalColor = function () {
    if (typeof params.color === 'function') {
        return params.color;
    } else {
        return function () {
            return params.color;
        };
    }
}();
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 200 200' }), React.createElement('path', {
    d: 'M100 138.004l64.225-64.225-11.783-11.783L100 114.437 47.558 61.996 35.775 73.779 100 138.004z',
    fill: evalColor('fill', '#2c2c2c')
}));;
}