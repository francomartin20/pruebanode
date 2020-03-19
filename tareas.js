
function readFileJson(path){

const filesystem = require("fs");

function callback(error, datos) {
    //console.log(error);
    //console.log(datos);
}
// llamar al contenido JSON
let json = filesystem.readFileSync("tareas.json", {encoding: "utf-8"}, callback)
//console.log("tasks", tasks);
//console.log(tasks);

// convertir JSON en array de JS
let obj = JSON.parse(json);
//console.log(tasks[0]);

return obj;
}

// console.log(readFileJson("tareas.json"));

module.exports = readFileJson;

