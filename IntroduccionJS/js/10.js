// Modificar Arreglos
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

// se deben modificar con metodos que no realicen mutacion del arreglo

tecnologias.filter( (tech) => {
    return tech !== 'React' // retornamos un nuevo arreglo sin el elemento a eliminar
})

tecnologias.map( (tech) => {
    return tech === 'JavaScript' ? 'Vue.js' : tech // si la tecnologia es JavaScript, retornamos Vue.js, sino retornamos la tecnologia original
})