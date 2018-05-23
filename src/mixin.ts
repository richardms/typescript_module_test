export interface IMyClient {
  user: string;
}

export type MyClientConstructor<T = IMyClient> = new (...args: any[]) => T;
