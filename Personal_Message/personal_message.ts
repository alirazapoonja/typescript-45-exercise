
let personName : string = '';

personName = prompt ('what is your name?') || ''; 

if(personName !== null && personName !== ''){
alert (`Hello ${personName}, Would you like to learn some Python Today?`);
}
else {
    alert ('You have to fill your name !');
}