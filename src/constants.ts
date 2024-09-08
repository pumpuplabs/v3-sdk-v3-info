import { ChainId } from '@uniswap/sdk-core'

export const FACTORY_ADDRESS = '0x1F98431c8aD98523631AE4a59f267346ea31F984'
export const FACTORY_ADDRESS_MAP = {
  [ChainId.BASE_SEPOLIA]: '0x9323c1d6D800ed51Bd7C6B216cfBec678B7d0BC2',
  [ChainId.BASE_GOERLI]: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  [ChainId.AVALANCHE]: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  [ChainId.POLYGON]: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  [ChainId.MAINNET]: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  [ChainId.BASE]: '0x1F98431c8aD98523631AE4a59f267346ea31F984'
}

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const POOL_INIT_CODE_HASH = '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54'

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
