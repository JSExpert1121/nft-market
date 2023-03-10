import { useState } from 'react';
import { TextField } from '../../components/base';

export const BlankSearch = () => {
  const [address, setAddress] = useState('');

  return (
    <div className='h-full flex justify-center items-center'>
      <form className='w-full max-w-md p-4'>
        <h2 className='text-2xl font-bold text-center my-4'>NFT Market</h2>
        <p className='text-gray-800 mt-4 mb-2'>Please input the owner&apos;s address</p>
        <TextField
          label='Input your address'
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
      </form>
    </div>
  )
}