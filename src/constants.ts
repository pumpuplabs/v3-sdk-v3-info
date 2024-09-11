import { ChainId } from '@uniswap/sdk-core'

export const FACTORY_ADDRESS = '0x1F98431c8aD98523631AE4a59f267346ea31F984'
export const FACTORY_ADDRESS_MAP = {
  [ChainId.BASE_SEPOLIA]: '0x434f93bc85e709C7c6760f1DfE793D35501EA671',
  [ChainId.BASE_GOERLI]: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  [ChainId.AVALANCHE]: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  [ChainId.POLYGON]: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  [ChainId.MAINNET]: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  [ChainId.BASE]: '0x1F98431c8aD98523631AE4a59f267346ea31F984'
}

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const POOL_INIT_CODE_HASH = '0x1e85f501b45deb56047d2d981e42784125caf47d6c30afeaab8a2a9fc0498037'

/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export enum FeeAmount {
  LOWEST = 100,
  LOW = 500,
  MEDIUM = 3000,
  HIGH = 10000
}

/**
 * The default factory tick spacings by fee amount.
 */
export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
  [FeeAmount.LOWEST]: 1,
  [FeeAmount.LOW]: 10,
  [FeeAmount.MEDIUM]: 60,
  [FeeAmount.HIGH]: 200
}
