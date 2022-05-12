import classNames from 'classnames';
import React from 'react';

import './button.css';

const Button = ({ onClick, type, children, size = 's' }) => {
  const btnClass = classNames({
    btn: true,
    'btn--secondary': type === 'secondary',
    'btn--primary': type === 'primary',
    'btn--small': type === 's',
    'btn--medium': type === 'm',
  });

  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
