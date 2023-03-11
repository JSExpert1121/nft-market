export const buildOpenseaURL = (addr: string, tokenId: string): string => {
  return `https://opensea.io/assets/ethereum/${addr}/${tokenId}`;
}
