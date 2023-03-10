import Head from 'next/head';
import { useRouter } from 'next/router'
import { MainLayout } from '@/components/layout';
import { NFTList } from '@/features/nft-list';

export default function Home() {
  const router = useRouter();
  const { address } = router.query;

  return (
    <MainLayout>
      <section className='flex-1'>
        <NFTList query={(address ?? '') as string} />
      </section>
    </MainLayout>
  )
}
