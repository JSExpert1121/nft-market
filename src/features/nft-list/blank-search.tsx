import { useRouter } from 'next/router';
import { SearchInput } from '../../components/base';

export const BlankSearch = () => {
  const router = useRouter();

  const onSearch = (query: string) => {
    router.push(`/${query}`);
  }

  return (
    <div className='h-full flex justify-center items-center'>
      <form className='w-full max-w-md p-4'>
        <h2 className='text-2xl font-bold text-center my-4'>NFT Market</h2>
        <p className='text-gray-800 mt-4 mb-2'>Please input the owner&apos;s address</p>
        <SearchInput
          label='Input an address'
          onSearch={onSearch}
        />
      </form>
    </div>
  )
}