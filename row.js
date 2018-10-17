import React from 'react';
import PropTypes from 'prop-types';
import { mapToCssModules } from './utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  noGutters: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  form: PropTypes.bool
};

const defaultProps = {
  tag: 'div'
};

const Row = (props) => {
  const {
    className,
    cssModule,
    noGutters,
    tag: Tag,
    form,
    ...attributes
  } = props;

  const classes = mapToCssModules([
    noGutters ? 'no-gutters' : null,
    form ? 'form-row' : 'row',
    className,
  ].join(' '), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
