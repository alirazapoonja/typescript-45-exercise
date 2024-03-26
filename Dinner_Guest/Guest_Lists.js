"use strict";
let Guest_List = ['Ali Raza', 'Imran Ali', 'Junaid',];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List [i]+ ',\n\nIt is our pleasure to invite your in our party.\n\nThank You!')
// }
let absent_Guest = 'Ali Raza';
let new_guest = 'Noor Muhammad';
Guest_List[0] = new_guest;
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List [i]+ ',\n\nIt is our pleasure to invite your in our party.\n\nThank You!')
// }
// console.log(`Mr. ${absent_Guest} is not coming to the party`);
// console.log('Good News! We find Big Table So we are inviting 3 more guests.');
Guest_List.unshift('Sir Abid Ali');
Guest_List.splice(2, 0, 'Erum Khan');
Guest_List.push('Jawaid Ali');
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List [i]+ ',\n\nIt is our pleasure to invite your in our party.\n\nThank You!')
// }
// console.log('\nSorry we can not arrange big table, Only Two peoples will be invited.');
while (Guest_List.length > 2) {
    let remove_guest = Guest_List.pop();
    // console.log (`Sorry Mr. ${remove_guest}, Your are not invited for Dinner.`);
}
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List [i]+ ',\n\nYou are still invited.\n\nThank You!');
// }
Guest_List.splice(0, 2);
console.log(Guest_List);
console.log(`total number of Guest Are: ${Guest_List.length}`);
