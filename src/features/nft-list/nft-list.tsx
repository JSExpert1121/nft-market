import { useState } from 'react';
import { TextField } from '../../components/base';
import { BlankSearch } from './blank-search';

type NFTListProps = {
  query?: string;
};

export const NFTList = ({ query }: NFTListProps) => {
  const [address, setAddress] = useState<string>(query ?? '');

  return query ? (
    <TextField
      label='Input your address'
      value={address}
      onChange={e => setAddress(e.target.value)}
    />
  ) : (
    <BlankSearch />
  )
}