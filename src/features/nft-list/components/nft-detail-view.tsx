import clsx from 'clsx';
import { NftDetails, StyledProps } from '@/types';
import { NftPropertyType } from '@/utils';
import { NftProperty } from './property';
import { infoKeys } from './nft-card';

type NftDetailViewProps = StyledProps & {
  data: NftDetails;
}
export const NftDetailView = ({ data, className }: NftDetailViewProps) => {
  return (
    <div className={clsx([className])}>
      <h1 className='text-xl my-2 text-center font-semibold'>{data.name}</h1>

      <div className='w-full'>
        {infoKeys.map(key => (
          <NftProperty key={key} property={key as NftPropertyType} value={data[key as NftPropertyType] as string} />
        ))}
      </div>
    </div>
  )
}