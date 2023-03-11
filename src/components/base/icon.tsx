import { forwardRef, ForwardedRef, ReactElement } from 'react';
import clsx from 'clsx';
import { StyledProps } from '@/types/styled';


export type IconProps = StyledProps & {
  content: string;

  viewBoxWidth?: number;
  viewBoxHeight?: number;

  onClick?: () => void;
};
const IconComponent = ((
  { content, className, onClick, viewBoxWidth = 20, viewBoxHeight = 20 }: IconProps,
  ref: ForwardedRef<SVGSVGElement>
): ReactElement => (
  <svg
    ref={ref}
    className={clsx(['fill-current flex-shrink-0', className, onClick ? 'cursor-pointer' : ''])}
    viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path d={content} fillRule="evenodd" clipRule="evenodd" />
  </svg>
));

export const Icon = forwardRef<SVGSVGElement, IconProps>(IconComponent);
