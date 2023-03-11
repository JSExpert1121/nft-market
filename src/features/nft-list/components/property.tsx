import { NftPropertyType, NFT_KEYS } from "@/utils";

type NftPropertyProps = {
  property: NftPropertyType;
  value: string;
}
export const NftProperty = ({ property, value }: NftPropertyProps) => (
  <div className='w-full inline-flex my-1'>
    <p className='inline-block font-semibold text-gray-900 w-32'>
      {NFT_KEYS[property]}:
    </p>
    <p
      className='inline-block text-gray-700 truncate ...'
      style={{ width: 'calc(100% - 128px)' }}
    >
      {value}
    </p>
  </div>
);
