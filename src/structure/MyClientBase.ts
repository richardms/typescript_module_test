import { IMyClient } from './IMyClient';

export class MyClientBase implements IMyClient {
  public user: string;

  constructor(message: string) {
    this.user = message || 'default_user';
  }
}
