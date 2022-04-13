import { PublicKey } from '@solana/web3.js';

export * from './gem-bank';
export * from './gem-farm';
export * from './gem-common';

export const GEM_BANK_PROG_ID = new PublicKey(
  '35rhBXARjxbyyEFqrfbSKaNciHyC7dwXS6Fi9nsehTN4'
);
export const GEM_FARM_PROG_ID = new PublicKey(
  '7vny5PKLmqsyg3YjHPVamiUhQPhSGdPNdoeRcYXBJG7B'
);
