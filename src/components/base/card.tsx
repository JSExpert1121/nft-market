import { PropsWithChildren, ReactElement } from 'react';
import clsx from 'clsx';
import { StyledProps } from '@/types';

export type CardProps = StyledProps & PropsWithChildren;
export const Card = ({ children, className }: CardProps) => {
  return (
    <div className={clsx(['w-full shadow-lg', className])}>
      {children}
    </div>
  )
}
