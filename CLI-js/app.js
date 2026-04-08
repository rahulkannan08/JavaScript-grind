const { addUser,
    listUsers,
    deleteUser,
    updateUser
} = require("./userService");

const cmd = process.argv[2];

if( cmd === "add") {
    const namae = process.argv[3];
    const email = process.argv[4];
    addUser(name, email);
}

else if(cmd== "list") {
    listUsers();
}

else if( cmd == "delete") {
    const id = process.argv[3];
    deleteUser();
    deleteUser(id);
}

else if( cmd === "update") {
    const id = process.argv[3];
    const name = process.argv[4];
    const email = process.argv[5];
    updateUser(id, name, email);
}

else {
    console.log("cmds, node app.js add John john@mail.com,node app.js list, node app.js delete 12345, node app.js update 12345 Mike mike@mail.com")
}


 

/* users.json => []
    npm init -y */