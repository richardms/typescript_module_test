import { MyClientLevel } from '../structure/MyClientLevel';
import rng from './rng';

export class MyClientGenerate extends MyClientLevel {
  public inline_rng(): Promise<number> {
    return new Promise((resolve, reject) => {
      resolve(Math.random() + this.top().user.length);
    });
  }

  public rng(): Promise<number> {
    return rng(this.top());
  }
}
