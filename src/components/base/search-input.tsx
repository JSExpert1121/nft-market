import { ChangeEventHandler } from 'react';
import clsx from 'clsx';
import { StyledProps } from '@/types/styled';


export type SearchInputProps = StyledProps & {
  label?: string;
  value: number | string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
export const SearchInput = ({ label, value, onChange, className }: SearchInputProps) => {
  return (
    <input
      type='text'
      placeholder={label}
      className={clsx([
        'min-h-[auto] w-full rounded bg-transparent py-1.5 px-2 leading-[1.6] border shadow-sm',
        'focus:outline-blue-300',
        className
      ])}
      {...{ value, onChange }}
    />
  )
}
