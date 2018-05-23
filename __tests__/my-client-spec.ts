import { MyClient } from '../src';

test('should create random number', done => {
  const client = new MyClient('friend');
  client.generate.rng().then((v: number) => {
    expect(v).toBeGreaterThanOrEqual(6);
    expect(v).toBeLessThan(7);
    done();
  });
});

test('should create benfile', done => {
  const client = new MyClient('friend');
  client.convert.ben2json('file_contents').then((v: {}) => {
    expect(v).toBeTruthy();
    expect(v[0]).toBe('benfile');
    expect(v[1]).toBe('friend');
    expect(v[2]).toBe('file_contents');
    done();
  });
});
