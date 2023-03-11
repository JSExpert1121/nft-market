export type NftInfo = {
  name: string;
  amount: string;
  contract_type: string;
  symbol: string;
  token_id: string;
  token_address: string;
  token_uri: string;
}

export type NftMetadata = {
  name: string;
  image: string;
  description: string;
  media: {
    uri: string;
    dimensions: string;
    size: string;
    mimeType: string;
  };
  attributes: { [key: string]: string }[];
}

export type NftDetails = NftInfo & {
  block_number: string;
  block_number_minted: string;
  last_metadata_sync: string;
  last_token_uri_sync: string;
  metadata: NftMetadata;
  minter_address: string;
  owner_of: string;
  token_hash: string;
}
