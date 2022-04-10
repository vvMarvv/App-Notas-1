let process = require('process');
let tareas = require('./tareas.json');

let argumento = process.argv[2];

switch(argumento){
    case "listar":
        console.log(tareas);
        break;
        case undefined:
        console.log("Atención - Tienes que pasar una acción");
        break;
        default:
            console.log("No entiendo qué quieres hacer");
        break;
        }
module.exports;