const { Module } = require("module");
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) =>{

    try {
        
    
        let salida, consola = '';

        for (let i = 1; i <= hasta; i++) {
    
            salida += (`${base} * ${i} = ${base*i}\n`);
            consola += (`${base} * ${i} = ${base*i}\n`.green);
            
        }
        
        fs.writeFileSync(`./salida/tabla-del-${base}.txt`, salida)
       
        if(listar){
            console.log('==============='.green);
            console.log(` Tabla del ${base} `.green);
            console.log('==============='.green);
            
            console.log(consola);
        }

            return `tabla-del-${base}.txt creada`;
        
        
    } catch (error) {
       throw error;
    }


   
}

module.exports = {
    crearArchivo
}