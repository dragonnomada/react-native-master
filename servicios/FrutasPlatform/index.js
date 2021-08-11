const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const package = require("./package.json");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (request, response) => {
    response.send(`Bienvenido a FrutasPlaform v${package.version}`);
});

const frutas = [
    {
        id: "manzana",
        nombre: "Manzana",
        gruposId: ["frutas-temporada", "frutas-descuento"],
        precio: 10
    },
    {
        id: "pera",
        nombre: "Pera",
        gruposId: ["frutas-temporada", "frutas-promocion"],
        precio: 10
    },
];

const grupos = [
    {
        id: "frutas-temporada",
        titulo: "Frutas de Temporada",
        color: "red"
    },
    {
        id: "frutas-descuento",
        titulo: "Frutas en Descuento",
        color: "blue"
    },
    {
        id: "frutas-promocion",
        titulo: "Frutas con Promoción",
        color: "green"
    },
];

const getSecciones = () => {
    return [
        ...grupos.map(grupo => {
            return {
                ...grupo,
                data: frutas.filter(fruta => fruta.gruposId.some(gruposId => gruposId === grupo.id))
            }
        }),
        {
            id: "frutas-sin-categoria",
            titulo: "Frutas sin categoría",
            color: "black",
            data: frutas.filter(fruta => fruta.gruposId.length === 0)
        }
    ]
};

app.get("/api/frutas", (request, response) => {
    response.send(frutas);
});

app.get("/api/frutas/secciones", (request, response) => {
    response.send(getSecciones());
});

app.post("/api/frutas/agregar", (request, response) => {
    console.log(request.body);

    const { nombre, precio } = request.body;

    const id = nombre.toLowerCase().replace(/[^a-z0-9]/g, "");

    if (frutas.some(fruta => fruta.id === id)) {
        response.send({
            success: false,
            error: `La fruta ${nombre} ya existe`
        });
        return;
    }

    console.log("Agregando fruta", nombre, precio);

    frutas.push({
        id,
        nombre,
        precio,
        gruposId: []
    });

    response.send({
        success: true
    });
});

const server = http.createServer(app);

server.listen(8080, "0.0.0.0", () => {
    console.log(`Server ready at http://localhost:8080/`);
});