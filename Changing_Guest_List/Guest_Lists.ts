let Guest_List : string[] = ['Ali Raza', 'Imran Ali', 'Junaid',];
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List [i]+ ',\n\nIt is our pleasure to invite your in our party.\n\nThank You!')
}

let absent_Guest : string = 'Ali Raza'; 
let new_guest : string = 'Noor Muhammad' ;
Guest_List[0] = new_guest ; 
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List [i]+ ',\n\nIt is our pleasure to invite your in our party.\n\nThank You!')
}
console.log(`Mr. ${absent_Guest} is not coming to the party`);
