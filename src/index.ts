import { IMyClient } from './structure/IMyClient';
import { IMyClientLevel } from './structure/IMyClientLevel';

//import Generate from './generate';
import { MyClientBase } from './structure/MyClientBase';

import { MyClientConvert } from './convert';
import { MyClientGenerate } from './generate';

export class MyClient extends MyClientBase implements IMyClientLevel {
  public convert = new MyClientConvert(this);
  public generate = new MyClientGenerate(this);

  public top(): IMyClient {
    return this;
  }
}
