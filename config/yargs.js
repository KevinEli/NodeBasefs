const argv = require('yargs')
                 .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                 })
                 .option('l', {
                    alias: 'log',
                    type: 'boolean',
                    default: false,
                    describe: 'Bandera para imprimir la tabla de multiplicar'
                 })
                 .check((argv, option) => {
                    if (isNaN(argv.b)) {
                        throw('la base tiene que ser un numero');
                    }
                    return true;
                 })
                 .argv; 

module.exports = argv;