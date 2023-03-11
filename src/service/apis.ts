import * as httpClient from './base';

export const getNfts = (address: string, cursor: string | null = null) =>
  httpClient.get('/api/nfts', { address, cursor });
