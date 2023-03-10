import * as httpClient from './base';

export const getNfts = (address: string) => httpClient.get('/api/nfts', { address });
