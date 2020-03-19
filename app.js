const process = require("process");
const traerTareas = require("./tareas.js");

let tareas = traerTareas("tareas.json");

switch (process.argv[2]){
    case "completadas": {
        for (let i = 0; i < tareas.length; i++) {
            const tarea = tareas[i];
            if (tarea.completed) {
                console.log(tarea.title);
            }else {
                console.log("ninguna esta completada")
            }
        }
        break;
    } case "todas": {
        for (let i = 0; i < tareas.length; i++) {
            const tarea = tareas[i];
            console.log(tarea.title);
        }
    }
    break;
    default:
        if (process.argv[2]){
            console.log("no reconozco: '" + process.argv[2] + ". Estas loco?");
        } else {
            console.log("necesitamos un parametro. Estas loco?");
        }

    
} // process.argv : arguments vector es lo mismo que: arrays



const aplicacion = require("./tareas");

let tareaNueva = aplicacion("tareas.json");

console.log(tareaNueva);
