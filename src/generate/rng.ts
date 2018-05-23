import * as myClient from '../mixin';

export default function rng(client: myClient.IMyClient): Promise<number> {
  return new Promise((resolve, reject) => {
    resolve(Math.random() + client.user.length);
  });
}
