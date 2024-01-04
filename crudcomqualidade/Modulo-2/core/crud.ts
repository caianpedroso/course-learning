import fs from "fs"; // ES6
// const fs = require("fs");
const DB_FILE_PATH = "./core/db";

console.log('[Crud]');

function create(content: string) {
    // salvar o content no sistema
    fs.writeFileSync(DB_FILE_PATH, content);
    return content
}

// SIMULATION
console.log(create("hoje eu preciso gravar aulas!!"))