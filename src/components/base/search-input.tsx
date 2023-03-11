import { KeyboardEvent, ChangeEvent, useState, useEffect } from 'react';
import clsx from 'clsx';
import { StyledProps } from '@/types/styled';
import { createClose, createSearch } from '@/assets/icons';
import { Icon } from './icon';


export type SearchInputProps = StyledProps & {
  label?: string;
  initValue?: string;
  onSearch: (value: string) => void | Promise<void>;
}
export const SearchInput = ({ initValue = '', label, onSearch, className }: SearchInputProps) => {
  const [value, setValue] = useState(initValue);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  useEffect(() => {
    setValue(initValue);
  }, [initValue])

  const handleKeyInput = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      onSearch(value);
    }
  };

  return (
    <div className={clsx(['relative', className])}>
      <input
        type='text'
        placeholder={label}
        className={clsx([
          'min-h-[auto] w-full rounded-md bg-transparent py-1.5 px-10 leading-[1.6] border shadow-sm text-gray-700',
          'focus:outline-blue-300'
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
