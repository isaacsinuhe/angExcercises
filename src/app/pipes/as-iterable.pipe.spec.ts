import { AsIterablePipe } from './as-iterable.pipe';

describe('AsIterablePipe', () => {
  it('create an instance', () => {
    const pipe = new AsIterablePipe();
    expect(pipe).toBeTruthy();
  });
});
