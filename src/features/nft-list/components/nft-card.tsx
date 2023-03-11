/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import clsx from 'clsx';
import { NftDetails, StyledProps } from '@/types';
import { NftPropertyType } from '@/utils';
import { Card } from '@/components/base/card';
import { NftProperty } from './property';

export const infoKeys = ['amount', 'token_id', 'token_address', 'token_uri', 'contract_type', 'symbol'];

export type NftCardProps = StyledProps & {
  data: NftDetails
  onView: (data: NftDetails) => void;
}
export const NftCard = ({ data, className, onView }: NftCardProps) => {
  const imageSrc = data.metadata.image;
  return (
    <Card
      className={clsx([
        'p-4 rounded-lg',
        'hover:bg-slate-100 hover:shadow-lg hover:shadow-slate-700 hover:cursor-pointer',
        className
      ])}
      onClick={() => onView(data)}
    >
      <img
        src={imageSrc.replace('ipfs://', 'https://ipfs.io/ipfs/')}
        alt={data.name}
        className='w-full'
      />
      <h1 className='text-xl my-2 text-center font-semibold'>{data.name}</h1>

      <div className='w-full'>
        {infoKeys.map(key => (
          <NftProperty key={key} property={key as NftPropertyType} value={data[key as NftPropertyType] as string} />
        ))}
      </div>
    </Card>
  )
}