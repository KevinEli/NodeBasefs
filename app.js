const crearArchivo = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

//node app --base=3 --limite=1
crearArchivo( argv.base, argv.l )
    .then(nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch(err => console.log(err));
   