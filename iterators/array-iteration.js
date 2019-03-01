const chalk = require('chalk')

const exampleIterators = ["one", "two", "three"];

console.log(chalk.blueBright("####################"))
console.log(chalk.blueBright("#      Hello       #"))
console.log(chalk.blueBright("####################"))
console.log("");
console.log(chalk.blueBright("# Let's iterate over an array: ['one', 'two', 'three']"))
console.log("");

for (let i = 0; i < exampleIterators.length; i+= 1) {
  console.log(chalk.blueBright(`# Item 1: ${exampleIterators[i]}`))
}