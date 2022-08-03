let numero = 3;

function sumaDos(n) {
  n = n + 2;
  return n;
}

console.log("El número antes de llamar la función es ", numero);
let nuevoNumero = sumaDos(numero);
console.log("EL NUEVO NUMERO ES: ", nuevoNumero);
console.log("El número después de llamar a la función es: ", numero);
