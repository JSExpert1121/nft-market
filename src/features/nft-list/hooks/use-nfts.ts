import { useEffect, useState } from 'react';
import { getNfts } from '@/service';
import { NftInfo } from '@/types';

type NftsData = {
  data: NftInfo[];
  error: string;
  loading: boolean;
}
export const useNfts = (address: string): NftsData => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const search = async () => {
      setLoading(true);
      setError('');

      try {
        const result = await getNfts(address);
        setData(result);
      } catch (e: any) {
        setError(e.message ?? JSON.stringify(e));
      } finally {
        setLoading(false);
      }
    }

    if (address) {
      search();
    }
  }, [address])

  return { data, error, loading }
}