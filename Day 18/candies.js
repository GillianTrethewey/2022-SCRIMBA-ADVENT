//  3 children have 10 pieces of candy - figure out the total pieces eaten

const candies = (children, candy) => {
  return parseInt(candy / children) * children;
};
console.log(candies(3, 10)); // expected 9
