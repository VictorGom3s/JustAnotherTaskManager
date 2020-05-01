import Dexie from "dexie";
const db = new Dexie("anne_development");

/* Criando stores = equivalente a tables */
db.version(1).stores({
  task: "++id,title,description,isCompleted",
  user: "++id,name,email,password",
});

db.open();

export default db;
