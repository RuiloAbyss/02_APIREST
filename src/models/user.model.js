const {randomUUID} = require('node:crypto');

let users = [
    {
        id: randomUUID(),
        name: "Abisai",
        email: "ruilo.abis@gmail.com",
        age: 22,
        active: true        
    },
    {
        id: randomUUID(),
        name: "Juan",
        email: "perez.juan@gmail.com",
        age: 32,
        active: true
    },
    {
        id: randomUUID(),
        name: "Fernanda",
        email: "Olivares.Fer@gmail.com",
        age: 21,
        active: true
    }
];

function findAll(){
    return users;
}

function findById(id){
    return users.find(user => user.id === id) ||null;
}

function addUser(item){
    if(!item.name || !item.email) return null;
    if(item.age && isNaN(Number(item.age))) return null; //si age es un parametro y no es un numero, retorna null

    const user = {
        id:randomUUID(),
        name: item.name, //obligatorio
        email: item.email, //obligatorio
        age: item.age, //opcional
        active: true
    }

    users.push(user);
    return user;
}

function updateUser(id, data){
    const index = users.findIndex(u => u.id === id);
    if(index === -1) return null;

    if(data.age && isNaN(Number(data.age))) return null;
    if(data.name === "" || data.email === "") return null;

    users[index] = {
        ...users[index], //permite acceder a las propiedades del objeto original
        name: typeof data.name === "undefined" ? users[index].name : data.name, //si no viene name en data, se queda con el original
        email: typeof data.email === "undefined" ? users[index].email : data.email,
        age: typeof data.age === "undefined" ? users[index].age : Number(data.age), //si viene age, se convierte a number
        active: typeof data.active === "undefined" ? users[index].active : Boolean(data.active) //si viene active, se convierte a boolean
    }

    return users[index];
}

function deleteUser(id) {//Se ocupaba hacer esto?
    const index = users.findIndex(user => user.id === id);
    if (index === -1) return null;
    const deleted = users.splice(index, 1)[0];
    return deleted;
}

module.exports = {
    findAll,
    findById,
    addUser,
    updateUser,
    deleteUser
}