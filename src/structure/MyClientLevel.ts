import { IMyClient } from './IMyClient';
import { MyClientBase } from './MyClientBase';
import { IMyClientLevel } from './IMyClientLevel';

export class MyClientLevel implements IMyClientLevel {
  private parent: IMyClientLevel;

  constructor(parent: IMyClientLevel) {
    this.parent = parent;
  }

  public top(): IMyClient {
    return this.parent.top();
  }
}
