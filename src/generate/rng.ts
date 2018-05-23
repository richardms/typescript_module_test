import { IMyClient } from '../structure/IMyClient';

export default function rng(client: IMyClient): Promise<number> {
  return new Promise((resolve, reject) => {
    resolve(Math.random() + client.user.length);
  });
}
