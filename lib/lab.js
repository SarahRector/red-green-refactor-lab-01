//const returnsName = (object) => object.name;

const returnsName = (object) => {
  const { name } = object;
  return name;
};
module.exports = { returnsName };
