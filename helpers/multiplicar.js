const fs = require('fs');


const crearArchivo = async (base = 5, l = true) => {

    try {
        let salida = '';

        for (let i = 1; i < 10; i++) {
            salida += (`${base} x ${i} = ${base * i}\n`);
        }

        if (l) console.log(salida);

        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);

        return `Tabla-${base}.txt`;
        
    } catch (error) {
        throw error;
    }   

}

module.exports = crearArchivo;