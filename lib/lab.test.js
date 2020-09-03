const { returnsName, copyAndPush, capitalizeAndFilter, fetchQuote } = require('./lab.js');

describe('returnsName function', () => {
  it('will return the name property of an object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const name = returnsName(spot);

    expect(name).toEqual('spot');
  });

});

describe('copyAndPush function', () => {  
  it('will return a new array with all the items of the original array and a new item pushed to the end', () => {
    const numbers = [1, 2, 3];

    const moreNumbers = copyAndPush(numbers, 4);

    expect(moreNumbers).toEqual([1, 2, 3, 4]);
    expect(numbers).toEqual([1, 2, 3]);
  });
});

describe('capitalizeAndFilter function', () => {
  it('will take in an array of strings and capitalize all strings and filter out any string that starts with the letter f', () => {
    const strings = ['crabby', 'fiona', 'loves', 'filberts'];

    const filteredStrings = capitalizeAndFilter(strings);

    expect(filteredStrings).toEqual(['CRABBY', 'LOVES']);
  });
});

describe('fetchQuote function', () => {
  it('will return a single quote from the futurama api', async() => {
    const quote = await fetchQuote();

    expect(quote).toEqual({
      name: expect.any(String),
      text: expect.any(String),
      image: expect.any(String)
    });
  });
});
