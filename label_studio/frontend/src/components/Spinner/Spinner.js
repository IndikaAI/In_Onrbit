import React from 'react';
import { cn } from '../../utils/bem';
import './Spinner.styl';
import Logo from './Logo'

export const Spinner = ({ className, style, size = 32, stopped = false }) => {
  const rootClass = cn('spinner');

  const sizeWithUnit = typeof size === 'number' ? `${size}px` : size;

  return (
    <div>
      <img src={Logo} alt="Logo"/>
    </div>
  );
};
