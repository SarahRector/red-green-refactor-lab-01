const fetch = require('node-fetch');


const returnsName = ({ name }) => {
  return name;
};

const copyAndPush = (arr, num) => {
  const numbers = arr;
  const moreNumbers = [...numbers, num];

  return moreNumbers;
};

const capitalizeAndFilter = (arr) => arr.filter(string => string.charAt(0) !== 'f').map(string => string.toUpperCase());

const fetchQuote = async() => {
  const randomQuote = await fetch('https://futuramaapi.herokuapp.com/api/quotes');
  const [{ image, character: name, quote: text }] = await randomQuote.json();

  return {
    image,
    name, 
    text
  };
};

module.exports = { returnsName, copyAndPush, capitalizeAndFilter, fetchQuote };
