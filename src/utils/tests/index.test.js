import { loadingOrErrorStatus } from '../index';

describe('loadingOrErrorStatus()', () => {
  it('should return loading text', () => {
    const result = loadingOrErrorStatus('loading');

    expect(result).toEqual(<h2>Loading...</h2>);
  });

  it('should return error text', () => {
    const result = loadingOrErrorStatus('error');

    expect(result).toEqual(<h2>Error fetching rockets, try again soon...</h2>);
  });
});
