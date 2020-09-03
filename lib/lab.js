
const returnsName = ({ name }) => {
  return name;
};

const copyAndPush = () => {
  const numbers = [1, 2, 3];

  numbers.push(4);

  return numbers;
};

module.exports = { returnsName, copyAndPush };
