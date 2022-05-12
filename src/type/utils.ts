import { INPUT_TYPE } from "../const/external";

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
export type ValueOf<T> = T[keyof T];
export type LiteralUnion<T extends U, U = string> = T | (Pick<U, never> & {_?: never});
export type NoBoolean<T> = T extends boolean ? never : T;

export type OptionGetters<T> = {
  [key in keyof T]: T[key]
};


export interface Range {
  min: number;
  max: number;
}

export interface ControlEvents {
  hold: { inputType: INPUT_TYPE; isTouch: boolean };
  release: { inputType: INPUT_TYPE; isTouch: boolean };
  enable: { inputType: INPUT_TYPE };
  disable: { inputType: INPUT_TYPE };
}

export type TypedArray =
  | Int8Array
  | Uint8Array
  | Uint8ClampedArray
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array;