/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Eventtypename = string;
export type Eventtype = string;

export interface EventType {
  eventTypeName: Eventtypename;
  eventType: Eventtype;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withEventType<TBase extends Constructor>(Base: TBase) {
  return class WithEventType extends Base {
    eventTypeName: Eventtypename;
    eventType: Eventtype;
  }
}
