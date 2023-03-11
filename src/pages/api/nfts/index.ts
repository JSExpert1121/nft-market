import type { NextApiRequest, NextApiResponse } from 'next'
import Moralis  from 'moralis';
import { EvmChain, GetWalletNFTsRequest } from '@moralisweb3/common-evm-utils';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== 'GET') {
    return res.status(404).send('Not allowed')
  }

  const address = req.query['address'] as string;
  const cursor = req.query['cursor'] as (string | undefined);

  if (!Moralis.Core.isStarted) {
    await Moralis.start({ apiKey: process.env.NEXT_PUBLIC_MORALIS_KEY });
  }

  const params: GetWalletNFTsRequest = {
    address,
    chain: EvmChain.ETHEREUM,
    limit: 12
  };

  if (cursor) params.cursor = cursor;
  const result = await Moralis.EvmApi.nft.getWalletNFTs(params);

  res.status(200).json(result);
}
