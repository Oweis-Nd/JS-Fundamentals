// A script that prints the addition of 2 integers

function add(a, b) {
  return a + b;
}

const args = process.argv.slice(2);
const num1 = Number(args[0]);
const num2 = Number(args[1]);

console.log(add(num1, num2));
