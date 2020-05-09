import Dexie from "dexie";
const db = new Dexie("justanothertaskmanager");

/* Criando stores = equivalente a tables */
db.version(1).stores({
  task: "++id,title,description,isCompleted",
});

db.open();

export default db;
