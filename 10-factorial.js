// A script that computes and prints a factorial recursively

function factorial(n) {
  if (isNaN(n) || n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const args = process.argv.slice(2);
const num = Number(args[0]);

console.log(factorial(num));
