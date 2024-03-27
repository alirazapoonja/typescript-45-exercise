"use strict";
const userNames = ['admin', 'Bugs Bunny', 'Daffy Duck', 'Sylvester', 'Tweety'];
for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
    }
}
