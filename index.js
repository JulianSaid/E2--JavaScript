const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

//EJERCICIO 1
const pizzasImpares = pizzas.filter(pizza => {
  return pizza.id % 2 === 1
}
)

pizzasImpares.forEach((pizza) => {
  const { nombre } = pizza;
  console.log(`La ${nombre} es impar`);
})

console.log("-------------------------------------");

//EJERCICIO 2 
const pizzaMasBarata = (precio) => {
  return pizzas.some((pizza) => {
    return pizza.precio < precio
  })
    ? console.log(`Hay productos con un precio menor a ${precio}`)
    : console.log(`No hay productos con un precio menor a ${precio}`)
};

pizzaMasBarata(2500);

console.log("-------------------------------------");


//EJERCICIO 3

const todasLasPizzas = (pizza) => {
  for( let key of pizza) {
    console.log(key);
  }
}


console.log(todasLasPizzas);