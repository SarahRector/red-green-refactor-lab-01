
const returnsName = ({ name }) => {
  return name;
};

const copyAndPush = (arr, num) => {
  const numbers = arr;
  const moreNumbers = [...numbers, num];

  return moreNumbers;
};

module.exports = { returnsName, copyAndPush };
