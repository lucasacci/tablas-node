const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar')




console.clear()

console.log(process.argv);

console.log(argv);


crearArchivo(argv.b, argv.l, argv.h)
        .then(nombre => console.log(nombre, 'creado'))
        .catch(err => console.log(err))





// const [ , , arg3='base=5'] = process.argv

// const [, base = 5] = arg3.split('=');

// console.log(base);

// const base = 1;



