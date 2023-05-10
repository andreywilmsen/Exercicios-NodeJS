let calc = require('./calc')

let args = process.argv.slice(2);

let a = parseInt(args[1]);
let b = parseInt(args[2]);
let c = "";

if (args[0] == "s") {
  c = calc.soma(a, b);
} else if (args[0] == "m") {
  c = calc.mult(a, b);
} else {
  c = "opção inválida";
}

console.log(c);
