import * as myClient from '../mixin';
import rng from './rng';

export default function GenerateMixin<
  TBase extends myClient.MyClientConstructor
>(Base: TBase) {
  return class extends Base {
    public inline_rng(): Promise<number> {
      return new Promise((resolve, reject) => {
        resolve(Math.random() + this.user.length);
      });
    }

    public rng(): Promise<number> {
      return rng(this);
    }
  };
}
