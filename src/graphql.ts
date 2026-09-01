
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class NumbersInput {
    a?: Nullable<number>;
    b?: Nullable<number>;
}

export abstract class IQuery {
    abstract hello(): Nullable<string> | Promise<Nullable<string>>;

    abstract health(): Nullable<string> | Promise<Nullable<string>>;
}

export abstract class IMutation {
    abstract add(input?: Nullable<NumbersInput>): Nullable<number> | Promise<Nullable<number>>;
}

type Nullable<T> = T | null;
