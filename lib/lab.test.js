const { returnsName } = require('./lab.js');

describe('returnsName function', () => {
  it('will return the name property of an object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const name = returnsName(spot);

    expect(name).toEqual('spot');
  });

});
