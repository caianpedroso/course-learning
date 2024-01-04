import fs from "fs"; // ES6
// const fs = require("fs");
const DB_FILE_PATH = "./db";

console.log('[Crud]');

function create(content: string) {
    // salvar o content no sistema
    fs.writeFileSync(DB_FILE_PATH, content);
    return content
}

function read() {
    const db = fs.readFileSync(DB_FILE_PATH, "utf-8")
    return db;
}

// SIMULATION
create("Segunda TODO")
console.log(read())
