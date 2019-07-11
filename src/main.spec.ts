import each from 'jest-each';

describe('Potter kata', () => {
  each([
    [[], 0],
    [[1], 8],
    [[2], 8],
    [[3], 8],
    [[4], 8],
    [[1, 1, 1], 8 * 3],
  ]).describe( 'Books $books -> $price', (books, price) => {
    expect(price(books)).toEqual(price);
  });
});
