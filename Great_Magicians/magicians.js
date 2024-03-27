"use strict";
let magician = ['Harry potter', 'hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];
function make_great(magicianArry) {
    for (let i = 0; i < magicianArry.length; i++) {
        magician[i] = 'the Great ' + magicianArry[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);
