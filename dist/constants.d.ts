import { ChainId } from '@uniswap/sdk-core';
export declare const FACTORY_ADDRESS = "0x1F98431c8aD98523631AE4a59f267346ea31F984";
export declare const FACTORY_ADDRESS_MAP: {
    84532: string;
    84531: string;
    43114: string;
    137: string;
    1: string;
    8453: string;
};
export declare const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
export declare const POOL_INIT_CODE_HASH = "0x4f157d8bc516d785f45049f8f9027de387954a1002431d9eac3d87b5f08a1976";
/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export declare enum FeeAmount {
    LOWEST = 100,
    LOW = 500,
    MEDIUM = 3000,
    HIGH = 10000,
    HIGHEST = 18000
}
/**
 * The default factory tick spacings by fee amount.
 */
export declare const TICK_SPACINGS: {
    [amount in FeeAmount]: number;
};
