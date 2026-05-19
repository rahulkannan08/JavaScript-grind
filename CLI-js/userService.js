const fs = require("fs");

const FILE = "users.json";

function readusers(callback) {
        fs.readFile(FILE, "utf8", (err, data) => {
        if(err) return callback(err,null);
        const users = JSON.parse(data || "[]");
        callback(null, users);
});
}

function writeUsers(users, callback) {
    fs.writeFile(FILE, JSON.stringify(users, null, 2), callback);
}

function addUser(name, email) {
    readusers((err, users) => {
        if(err) return console.log("error");

        const newUser= {
            id : Date.now(),
            name,
            email
        }; 
    users.push(newUser);
writeUsers(users, () => {
    console.log("user added succeflyy");
});
   });
}

function listUsers(){
    readusers((err, users) => {
        if(err) return console.log("error");
        console.log(users);
    });
}

function deleteUser(id){
    readusers((err, users) => {
        if(err) return console.log("error");
        const filtered = users.filter( user => user.id != id);

        writeUsers(filtered, () => {
            console.log("user deleted");
        });
    });

}

function updateUser(id,name,email) {
    readusers((err,users) => {
        const index = users.findIndex(user => user.id == id);

        if( index === -1){
            console.log("User not found");
            return;
        }
            users[index] = { ...users[index], name, email};
        
        writeUsers( users, () => {
            console.log("user updated");
        });
        
    });
}

module.exports  = {
    addUser,
    listUsers,
    deleteUser,
    updateUser
}