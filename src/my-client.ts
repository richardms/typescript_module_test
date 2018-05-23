import * as myClient from './mixin';

export default class MyClientBase implements myClient.IMyClient {
  public user: string;

  constructor(message: string) {
    this.user = message || 'default_user';
  }
}
