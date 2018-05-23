import { MyClient } from '../src';

test('should create random number', done => {
  const client = new MyClient('friend');
  client.rng().then((v: number) => {
    expect(v).toBeGreaterThanOrEqual(6);
    expect(v).toBeLessThan(7);
    done();
  });
});
