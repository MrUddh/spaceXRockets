import rocketsReducer, { toggleFavorite } from '../rocketsSlice';

describe('rocket reducer', () => {
  const state = {
    status: 'idle',
    allRockets: [
      { id: '1', name: 'Falcon', isFavorite: true },
      { id: '2', name: 'Starship' },
    ],
  };
  it('should handle initial state', () => {
    expect(rocketsReducer(undefined, { type: 'unknown' })).toEqual({
      status: 'idle',
      allRockets: [],
    });
  });

  it('should toggle favorite to false', () => {
    const actual = rocketsReducer(state, toggleFavorite('1'));
    expect(actual.allRockets[0].isFavorite).toEqual(false);
  });

  it('should add favorite and set it to true', () => {
    const actual = rocketsReducer(state, toggleFavorite('2'));
    expect(actual.allRockets[1].isFavorite).toEqual(true);
  });
});
