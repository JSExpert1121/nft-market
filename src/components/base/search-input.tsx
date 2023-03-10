import { KeyboardEvent, ChangeEvent, useState } from 'react';
import clsx from 'clsx';
import { StyledProps } from '@/types/styled';
import { createClose, createSearch } from '@/assets/icons';
import { Icon } from './icon';


export type SearchInputProps = StyledProps & {
  label?: string;
  onSearch: (value: string) => void | Promise<void>;
}
export const SearchInput = ({ label, onSearch, className }: SearchInputProps) => {
  const [value, setValue] = useState('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const handleKeyInput = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      onSearch(value);
    }
  };

  return (
    <div className='relative'>
      <input
        type='text'
        placeholder={label}
        className={clsx([
          'min-h-[auto] w-full rounded-md bg-transparent py-1.5 px-10 leading-[1.6] border shadow-sm text-gray-700',
          'focus:outline-blue-300',
          className
        ])}
        onKeyDown={handleKeyInput}
        {...{ value, onChange }}
      />

      <Icon
        content={createSearch}
        className='absolute top-2 left-2 w-6 h-6 text-gray-600'
        onClick={() => onSearch(value)}
      />

      {!!value && (
        <Icon
          content={createClose}
          className='absolute top-2 right-2 w-6 h-6 text-gray-600'
          onClick={() => setValue('')}
        />
      )}
    </div>
  )
}
