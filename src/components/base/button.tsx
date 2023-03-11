import { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { StyledProps } from '@/types';

export type ButtonProps = StyledProps & PropsWithChildren & {
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'text';
}
export const Button = ({ children, className, onClick, variant = 'primary' }: ButtonProps) => {
  return (
    <button
      className={clsx([
        'button',
        {
          'bg-blue-800': variant === 'primary',
          'bg-purple-800': variant === 'secondary',
          'bg-red-600': variant === 'danger',
          'text-white': variant !== 'text',
          'text-slate-700 bg-white': variant === 'text'
        },
        className
      ])}
      onClick={onClick}
    >
      {children}
    </button>
  )
}