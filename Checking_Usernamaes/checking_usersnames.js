"use strict";
let current_users = ['ALi', 'Raza', 'JuNaid', 'SalMan', 'John'];
let new_users = ['Bilal', 'ALi', 'Dawood', 'SalMan', 'Jamel'];
new_users.forEach(newUsername => {
    let lowercase = newUsername.toLowerCase();
    if (current_users.map(c_user => c_user.toLowerCase()).includes(lowercase)) {
        console.log(`The username ${newUsername} is not avaiable. Please write a different username`);
    }
    else {
        console.log(`The username ${newUsername} is avaiable`);
    }
});
