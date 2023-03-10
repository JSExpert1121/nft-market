// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/common-evm-utils';

type ResponseData = {
  name?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | string>
) {
  if (req.method !== 'GET') {
    return res.status(404).send('Not allowed')
  }

  const address = req.query['address'];
  console.log(address, process.env.NEXT_PUBLIC_MORALIS_KEY);

  // await Moralis.start({ apiKey: process.env.NEXT_PUBLIC_MORALIS_KEY });
  res.status(200).json({ name: process.env.NEXT_PUBLIC_MORALIS_KEY });
}
