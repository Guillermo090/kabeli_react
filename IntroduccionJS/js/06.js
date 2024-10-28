// desestructuraion

// Objeto
const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible: false
}

const cliente = {
    nombre: "Juan",
    premium: true,
    direccion: {
        calle: "Calle 123",
    }
}

const { nombre, precio } = producto;
console.log(nombre);

const { nombre: nombreCliente, premium, direccion: {calle} } = cliente; // renombrar variables y acceder a propiedades anidadas