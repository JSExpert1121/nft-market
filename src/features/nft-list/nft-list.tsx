import { useState } from 'react';
import { useNfts } from './hooks';
import { SearchInput } from '@/components/base';
import { BlankSearch } from './blank-search';
import { Card } from '@/components/base/card';
import { NftCard } from './components';

type NFTListProps = {
  query: string;
};

export const NFTList = ({ query }: NFTListProps) => {
  const [address, setAddress] = useState<string>(query ?? '');

  const { data, error, loading } = useNfts(address);

  return query ? (
    <div className='h-full w-full px-4'>
      <div className='flex my-2'>
        <SearchInput
          label='Input an address'
          onSearch={setAddress}
          className='w-[400px] max-w-full'
        />
      </div>

      <div className='container mx-auto grid sm:grid-cols-12 md:grid-cols-6 lg:grid-cols-4 xl:grid-cols-3 gap-4'>
        {!!error && <p className='text-red-700 text-sm'>{error}</p>}
        {loading && <p>loading ...</p>}

        {data.map(item => (
          <NftCard key={item.tokenId} data={item} />
        ))}
      </div>
    </div>
  ) : (
    <BlankSearch />
  )
}
