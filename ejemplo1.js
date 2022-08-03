let lista = [1, 2, 3, 4, 5];

function sumaLista(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}

console.log("La lista antes de llamar a la función es: ", lista);
let suma = sumaLista(lista);
console.log("LA SUMA ES: ", suma);
console.log("la lista después de llamar a la función es: ", lista);
