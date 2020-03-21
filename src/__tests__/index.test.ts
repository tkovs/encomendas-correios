import { track } from '../index';

describe('track', () => {
  it('should mount a complete object with an valid code', () => {
    const response = track('PW086958114BR');
    expect(response).toEqual({});
  });
});
