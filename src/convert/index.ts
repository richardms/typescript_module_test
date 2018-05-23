import { MyClientLevel } from '../structure/MyClientLevel';

export class MyClientConvert extends MyClientLevel {
  public ben2json(contents: string): Promise<[string, string, string]> {
    return new Promise((resolve, reject) => {
      resolve(['benfile', this.top().user, contents]);
    });
  }
}
