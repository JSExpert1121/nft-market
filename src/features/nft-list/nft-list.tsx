import { useState } from 'react';
import { useRouter } from 'next/router';
import useInfiniteScroll from 'react-infinite-scroll-hook';

import { useNfts } from './hooks';
import { SearchInput, Spinner } from '@/components/base';
import { NftCard } from './components';
import { NftDetails } from '@/types';
import { Modal } from '@/components/base/modal';
import { NftDetailView } from './components/nft-detail-view';
import { Button } from '@/components/base/button';
import { Icon } from '@/components/base/icon';
import { createClose } from '@/assets/icons';
import { buildOpenseaURL } from '@/utils';

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
    window.location.pathname = `/${addr}`;
  }

  const handleView = (data: NftDetails) => {
    setCurrent(data);
  }

  const handleClose = () => setTimeout(() => setCurrent(null), 100);
  const handleBuy = () => {
    setTimeout(() => setCurrent(null), 100);
    if (current?.token_address) {
      window.open(buildOpenseaURL(current.token_address, current.token_id), '_blank');
    }
  }

  return (
    <div className='h-full w-full px-4 overflow-y-auto'>
      <div className='flex my-2'>
        <SearchInput
          initValue={address}
          label='Input an address'
          onSearch={handleSearch}
          className='w-[480px] max-w-full'
        />
      </div>

      {!!error && <p className='text-red-600 text-sm'>{error}</p>}
      {!error && data.length === 0 && <p className='text-red-600 text-sm'>No NFTs</p>}

      <div className='max-w-5xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6'>
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
        <div className='flex justify-between'>
          <h1 className='text-xl my-2 text-center font-semibold'>{current?.name}</h1>
          <Button variant='text' onClick={handleClose} className='min-w-min'>
            <Icon content={createClose} className='w-6 h-6' />
          </Button>
        </div>
        {!!current && <NftDetailView data={current} />}
        <div className='flex justify-end gap-4'>
          <Button variant='text' onClick={handleClose}>Cancel</Button>
          <Button variant='primary' onClick={handleBuy}>Purchase</Button>
        </div>
      </Modal>
    </div>
  );
}
