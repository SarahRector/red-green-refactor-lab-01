
const returnsName = ({ name }) => {
  return name;
};

const copyAndPush = (arr, num) => {
  const numbers = arr;
  const moreNumbers = [...numbers, num];

  return moreNumbers;
};

const capitalizeAndFilter = (arr) => arr.filter(string => string.charAt(0) !== 'f').map(string => string.toUpperCase());

module.exports = { returnsName, copyAndPush, capitalizeAndFilter };
