import getColorIndicator from '../health';

describe('getColorIndicator()', () => {
  test('>90', () => {
    expect(getColorIndicator({ name: 'Маг', health: 90 })).toBe('Healthy');
  });

  test('15-50', () => {
    expect(getColorIndicator({ name: 'Маг', health: 40 })).toBe('Wounded');
  });

  test('<15', () => {
    expect(getColorIndicator({ name: 'Маг', health: 4 })).toBe('Critical');
  });

  test('>90', () => {
    expect(getColorIndicator({ name: 'Маг', health: 0 })).toBe('You died!');
  });
});
