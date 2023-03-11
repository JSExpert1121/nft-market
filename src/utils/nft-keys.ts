export const NFT_KEYS = {
  name: 'Name',
  token_id: 'Token ID',
  token_address: 'Token Address',
  token_uri: 'Token URI',
  contract_type: 'Contract Type',
  amount: 'Amount',
  symbol: 'Symbol',

  block_number: 'Block No',
  block_number_minted: 'Block No Minted',
  last_metadata_sync: 'Last Sync(Metadata)',
  last_token_uri_sync: 'Last Sync(Token URI)',
  metadata: 'Metadata',
  minter_address: 'Minter Address',
  owner_of: 'Owner',
  token_hash: 'Token Hash',
};

export type NftPropertyType = keyof typeof NFT_KEYS;
