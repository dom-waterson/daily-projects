const cuts = ['Chuck', 'Brisket', 'Shank', 'Short Rib'];
/* eslint-disable */
for (const cut of cuts) {
  console.log(cut);
}

for (const [i, cut] of cuts.entries()) {
  console.log(`${cut} is the ${i + 1} item`);
}

function addUpNumbers() {
  let total = 0;
  for (const num of arguments) {
    total += num;
  }
  console.log(total);
  return total;
}

addUpNumbers(10, 34, 57, 89, 90, 88);

const name = 'Dom Waterson';
for (const char of name) {
  console.log(char);
}

// loop over object
const apple = {
  colour: 'Green',
  size: 'large',
  weight: 50,
  sugar: 10,
};

// Can use pollyfill for entries, will be included in ES 2017
// for (const prop of apple.entries()) {
//     console.log(prop);
// }

for (const prop of Object.keys(apple)) {
  const value = apple[prop];
  console.log(value);
}

for (const prop in apple) {
  const value = apple[prop];
  console.log(value);
}
/* eslint-enable */
