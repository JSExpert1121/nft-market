import { useState } from 'react';
import { useRouter } from 'next/router';
import useInfiniteScroll from 'react-infinite-scroll-hook';

import { useNfts } from './hooks';
import { SearchInput, Spinner } from '@/components/base';
import { NftCard } from './components';
import { NftDetails } from '@/types';
import { Modal } from '@/components/base/modal';
import { NftDetailView } from './components/nft-detail-view';

export const NFTList = () => {
  const router = useRouter();
  const address = router.query.address as string;

  const [current, setCurrent] = useState<NftDetails | null>(null);
  const { data, error, loading, hasNextPage, fetchNfts } = useNfts(address);
  const [loaderRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: fetchNfts,
    disabled: !!error,
  });

  const handleSearch = (addr: string) => {
    router.push(`/${addr}`);
  }

  const handleView = (data: NftDetails) => {
    setCurrent(data);
  }

  const handleClose = () => setCurrent(null);

  return (
    <div className='h-full w-full px-4 overflow-y-auto'>
      <div className='flex my-2'>
        <SearchInput
          label='Input an address'
          onSearch={handleSearch}
          className='w-[400px] max-w-full'
        />
      </div>

      <div className='max-w-5xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6'>
        {!!error && <p className='text-red-700 text-sm'>{error}</p>}
        {data.map(item => (
          <NftCard key={item.token_id} data={item} onView={handleView} />
        ))}
      </div>

      {(loading || hasNextPage) && (
        <div ref={loaderRef} className='h-24 flex justify-center items-center'>
          <Spinner />
        </div>
      )}

      <Modal open={!!current} onClose={handleClose}>
        {!!current && <NftDetailView data={current} />}
      </Modal>
    </div>
  );
}
