import { forwardRef, ForwardedRef, ReactElement } from 'react';
import clsx from 'clsx';
import { StyledProps } from '@/types/styled';


export type IconProps = StyledProps & {
  content: string;

  viewBoxWidth?: number;
  viewBoxHeight?: number;
};
const TextFieldComponent = ((
  { content, className, viewBoxWidth = 20, viewBoxHeight = 20 }: IconProps,
  ref: ForwardedRef<SVGSVGElement>
): ReactElement => (
  <svg
    ref={ref}
    className={clsx('fill-current flex-shrink-0', className)}
    viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={content} fillRule="evenodd" clipRule="evenodd" />
  </svg>
));

export const TextField = forwardRef<SVGSVGElement, IconProps>(TextFieldComponent);
