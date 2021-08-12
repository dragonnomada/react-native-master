export const frutasInventoryDefaultState = {
    total: 6,
    frutas: [
        {
            name: "Manzana",
            quantity: 5
        },
        {
            name: "Mango",
            quantity: 1
        },
    ],
    frutasNames: ["Manzana", "Mango"],
    frutaMaxQuantity: {
        name: "Manzana",
        quantity: 5
    },
    frutaMinQuantity: {
        name: "Mango",
        quantity: 1
    },
    message: "Está es una prueba",
    error: true
};

export const frutasInventoryTest1State = {
    total: 4,
    frutas: [
        {
            name: "Manzana",
            quantity: 3
        },
        {
            name: "Mango",
            quantity: 1
        },
    ],
    frutasNames: ["Manzana", "Mango"],
    frutaMaxQuantity: {
        name: "Manzana",
        quantity: 3
    },
    frutaMinQuantity: {
        name: "Mango",
        quantity: 1
    },
    message: "Está es una prueba",
    error: true
};

export const frutasInventoryTest2State = {
    total: 6,
    frutas: [
        {
            name: "Manzana",
            quantity: 3
        },
        {
            name: "Mango",
            quantity: 1
        },
        {
            name: "Pera",
            quantity: 2
        },
    ],
    frutasNames: ["Manzana", "Mango", "Pera"],
    frutaMaxQuantity: {
        name: "Manzana",
        quantity: 3
    },
    frutaMinQuantity: {
        name: "Mango",
        quantity: 1
    },
    message: "Está es una prueba",
    error: true
};

const frutas100 = [...Array(100)].map((_, index) => ({
    name: `Fruta ${index + 1}`,
    quantity: 1
}));

export const frutasInventoryTest3State = {
    total: 100,
    frutas: frutas100,
    frutasNames: frutas100.map(fruta => fruta.name),
    frutaMaxQuantity: frutas100[0],
    frutaMinQuantity: frutas100[99],
    message: "Está es una prueba de 100 frutas",
    error: false
};