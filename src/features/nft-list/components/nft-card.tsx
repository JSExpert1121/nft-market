import clsx from 'clsx';
import { NftInfo, StyledProps } from '@/types';
import { Card } from '@/components/base/card';

export type NftCardProps = StyledProps & {
  data: NftInfo
}
export const NftCard = ({ data, className }: NftCardProps) => {
  return (
    <Card className={className}>
      {data.tokenId}
    </Card>
  )
}