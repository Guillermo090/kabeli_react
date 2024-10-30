// Modificar Arreglos
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

const numeros = [10,20,30,40,50]

// se deben modificar con metodos que no realicen mutacion del arreglo

tecnologias.filter( (tech) => {
    return tech !== 'React' // retornamos un nuevo arreglo sin el elemento a eliminar
})

tecnologias.map( (tech) => {
    return tech === 'JavaScript' ? 'Vue.js' : tech // si la tecnologia es JavaScript, retornamos Vue.js, sino retornamos la tecnologia original
})

// Otros metodos reelevantes

// includes
// const resultado = tecnologias.includes('React')

// Some - Devuelve si al menos un elemento cumple con la condición
// const resultado = numeros.some( num => num >= 20 )

// Find - Busca el primer elemento que cumpla con la condición
// const resultado = numeros.find( num => num > 15 )

// Every - Retorna true si todos los elementos del arreglo cumplen con la condición
// const resultado = numeros.every( num => num >= 20 )

// Reduce - Permite reducir un arreglo a un valor singular
const resultado = numeros.reduce( (total, numero) => total + numero , 0 )

console.log(resultado)