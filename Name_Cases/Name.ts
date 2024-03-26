let personname :string = '';

personname = prompt ('What is your name?') || '';

let lowercase :string = personname.toLowerCase();
let uppercase :string = personname.toUpperCase();
let titlecase :string = personname.split('').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('')

if(personname !== null && personname !== ''){
alert(`Hello ${personname}, Here are your name in:
Lowercase: ${lowercase}
uppercase: ${uppercase}
Titlecase: ${titlecase}`)    
}
else{
    alert('Please fill your name !')}
