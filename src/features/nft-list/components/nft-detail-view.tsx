import clsx from 'clsx';
import { NftDetails, StyledProps, NftMetadata } from '@/types';
import { NftPropertyType } from '@/utils';
import { NftProperty } from './property';

export const infoKeys = [
  'amount', 'token_id', 'token_address', 'token_uri', 'token_hash',
  'contract_type', 'symbol', 'block_number', 'block_number_minted',
  'last_metadata_sync', 'last_token_uri_sync', 'minter_address'
];
export const metaKeys = [
  'name', 'image', 'description'
]

type NftDetailViewProps = StyledProps & {
  data: NftDetails;
}
export const NftDetailView = ({ data, className }: NftDetailViewProps) => {
  return (
    <div className={clsx([className])}>
      <h2 className='text-lg my-2 font-bold'>Summary</h2>
      <div className='w-full'>
        {infoKeys.map(key => (
          <NftProperty
            key={key}
            wrap
            property={key as NftPropertyType}
            value={data[key as NftPropertyType] as string}
          />
        ))}
      </div>

      <h2 className='text-lg my-2 font-bold'>Meta Data</h2>
      <div className='w-full'>
        {metaKeys.map(key => (
          <NftProperty
            key={key}
            wrap
            property={key}
            value={data.metadata[key as keyof NftMetadata] as string}
          />
        ))}

        {!!data.metadata.media && Object.keys(data.metadata.media).map((key, idx) => (
          <NftProperty
            key={idx}
            wrap
            property={key}
            value={data.metadata.media[key as keyof typeof data.metadata.media] as string}
          />
        ))}
      </div>
    </div>
  )
}