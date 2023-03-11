import { MainLayout } from '@/components/layout';
import { BlankSearch } from '@/features/nft-list';

export default function Home() {
  return (
    <MainLayout>
      <section className='flex-1'>
        <BlankSearch />
      </section>
    </MainLayout>
  )
}
