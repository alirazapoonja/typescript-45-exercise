"use strict";
let personname = '';
personname = prompt('What is your name?') || '';
let lowercase = personname.toLowerCase();
let uppercase = personname.toUpperCase();
let titlecase = personname.split('').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
if (personname !== null && personname !== '') {
    alert(`Hello ${personname}, Here are your name in:
Lowercase: ${lowercase}
uppercase: ${uppercase}
Titlecase: ${titlecase}`);
}
else {
    alert('Please fill your name !');
}
