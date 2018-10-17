'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function isObject(target) {
  return (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === "object" && target !== null;
}

var colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
var stringOrNumberProp = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]);

var columnProps = _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.shape({
  size: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.number, _propTypes2.default.string]),
  push: (0, _utils.deprecated)(stringOrNumberProp, 'Please use the prop "order"'),
  pull: (0, _utils.deprecated)(stringOrNumberProp, 'Please use the prop "order"'),
  order: stringOrNumberProp,
  offset: stringOrNumberProp
})]);

var propTypes = {
  tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object,
  widths: _propTypes2.default.array
};

var defaultProps = {
  tag: 'div',
  widths: colWidths
};

var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : 'col-' + colWidth;
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : 'col-' + colWidth + '-auto';
  }

  return isXs ? 'col-' + colSize : 'col-' + colWidth + '-' + colSize;
};

var Col = function Col(props) {
  var className = props.className,
      cssModule = props.cssModule,
      widths = props.widths,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'widths', 'tag']);

  var colClasses = [];

  widths.forEach(function (colWidth, i) {
    var columnProp = props[colWidth];

    delete attributes[colWidth];

    if (!columnProp && columnProp !== '') {
      return;
    }

    var isXs = !i;

    if (isObject(columnProp)) {
      var colSizeInterfix = isXs ? '-' : '-' + colWidth + '-';
      var colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);

      colClasses.push((0, _utils.mapToCssModules)([(columnProp.size || columnProp.size === '') && colClass, (columnProp.order || columnProp.order === 0) && 'order' + colSizeInterfix + columnProp.order, (columnProp.offset || columnProp.offset === 0) && 'offset' + colSizeInterfix + columnProp.offset].join(' ')), cssModule);
    } else {
      var _colClass = getColumnSizeClass(isXs, colWidth, columnProp);
      colClasses.push(_colClass);
    }
  });

  if (!colClasses.length) {
    colClasses.push('col');
  }

  var classes = (0, _utils.mapToCssModules)([].concat(colClasses, [className]).join(' '), cssModule);

  return _react2.default.createElement(Tag, _extends({}, attributes, { className: classes }));
};

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;

exports.default = Col;