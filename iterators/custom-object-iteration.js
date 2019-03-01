const chalk = require('chalk')

const customIterators = {
  *[Symbol.iterator]() {
      yield "one";
      yield "two";
      yield "three";
  }
}

console.log(chalk.blueBright("####################"))
console.log(chalk.blueBright("#      Hello       #"))
console.log(chalk.blueBright("####################"))
console.log("");
console.log(chalk.blueBright("# Let's iterate over an array: ['one', 'two', 'three']"))
console.log("");

let i = 0;

for (const iterator of customIterators) {
  i+= 1
  console.log(chalk.blueBright(`# Item ${i}: ${iterator}`))
}