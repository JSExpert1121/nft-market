import { MouseEventHandler, PropsWithChildren, ReactElement } from 'react';
import clsx from 'clsx';
import { StyledProps } from '@/types';

export type CardProps = StyledProps & PropsWithChildren & {
  onClick?: MouseEventHandler<HTMLDivElement>;
};
export const Card = ({ children, className, onClick }: CardProps) => {
  return (
    <div className={clsx(['w-full shadow-lg', className])} onClick={onClick}>
      {children}
    </div>
  )
}
