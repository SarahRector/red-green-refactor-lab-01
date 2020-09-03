
const returnsName = ({ name }) => {
  return name;
};

const copyAndPush = (arr, num) => {
  const numbers = arr;
  const moreNumbers = [...numbers, num];

  return moreNumbers;
};

const capitalizeAndFilter = (arr) => {
  const filtered = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].charAt(0) !== 'f') {
      filtered.push(arr[i].toUpperCase());
    }
  }
  return filtered;
};

module.exports = { returnsName, copyAndPush, capitalizeAndFilter };
