const mascotas = [
    {
        id: "zusi",
        name: "Zusi",
        picture: "https://placekitten.com/400",
        price: 40000,
        description: `
            Es tierno y comprensivo
        `
    },
    {
        id: "poki",
        name: "Poki",
        picture: "https://placekitten.com/401",
        price: 30000,
        description: `
            Es agresivo
        `
    },
]

export default function useMascotas() {
    return {
        mascotas
    }
}