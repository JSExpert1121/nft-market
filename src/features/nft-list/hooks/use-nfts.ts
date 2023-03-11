import { useEffect, useRef, useState, useCallback } from 'react';
import { getNfts } from '@/service';
import { NftDetails } from '@/types';

type NftsData = {
  data: NftDetails[];
  error: string;
  loading: boolean;
  hasNextPage: boolean;
  fetchNfts: () => Promise<void>;
}
export const useNfts = (address: string): NftsData => {
  const [data, setData] = useState<NftDetails[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const cursorRef = useRef(null);

  const fetchNfts = useCallback(async () => {
    setError('');
    setLoading(true);

    try {
      const result = await getNfts(address, cursorRef.current ?? '');
  
      const { result: nfts, cursor } = result;
      if (nfts) {
        setHasNextPage(!!cursor);
        cursorRef.current = cursor;
        setData(data => [
          ...data,
          ...nfts.map((nft: any) => ({ ...nft, metadata: JSON.parse(nft.metadata) }))
        ]);
      } else {
        setHasNextPage(false);
      }
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  }, [address]);

  useEffect(() => {
    cursorRef.current = null;
    setData([]);
  }, [address])

  return { data, error, loading, hasNextPage, fetchNfts }
}