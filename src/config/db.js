import Dexie from "dexie";
const db = new Dexie("justanothertaskmanager");

/* Criando stores = equivalente a tables */
db.version(3).stores({
  task: "++id,title,description,priority,isCompleted",
});

db.open();

export default db;
