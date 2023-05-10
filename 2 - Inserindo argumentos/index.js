let args = process.argv.slice(2);

let a = parseInt(args[1]);
let b = parseInt(args[2]);
let c = "";

if (args[0] == "s") {
  c = soma(a, b);
} else if (args[0] == "m") {
  c = mult(a, b);
} else {
  c = "opção inválida";
}

function soma(x, y) {
  return x + y;
}

function mult(x, y) {
  return x * y;
}
console.log(c);
