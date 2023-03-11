import clsx from 'clsx';
import { NftPropertyType, NFT_KEYS } from "@/utils";

type NftPropertyProps = {
  property: string;
  value: string;
  wrap?: boolean;
}
export const NftProperty = ({ property, value, wrap = false }: NftPropertyProps) => (
  <div className='w-full inline-flex my-1'>
    <p className='inline-block font-semibold text-gray-900 w-32 capitalize'>
      {NFT_KEYS[property as NftPropertyType] ?? property}:
    </p>
    <p
      className={clsx(['inline-block text-gray-700', wrap ? 'break-words' : 'truncate ...'])}
      style={{ width: 'calc(100% - 128px)' }}
    >
      {value}
    </p>
  </div>
);
