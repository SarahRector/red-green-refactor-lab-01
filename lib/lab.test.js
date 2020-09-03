const { returnsName, copyAndPush } = require('./lab.js');

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
