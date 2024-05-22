"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["salar", "admin", "rawaha", "sila", "saboor"];
let new_users = ["hammad", "jawad", "fawad", "samad", "suhab"];
new_users.forEach((newUser) => {
    if (current_users.some((currentUser) => currentUser.toLocaleLowerCase() === newUser.toLocaleLowerCase())) {
        console.log(`${newUser} Will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});
