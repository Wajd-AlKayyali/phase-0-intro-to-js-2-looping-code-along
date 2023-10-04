// // Code your solutions in this file
// for (let age = 30; age < 40 ; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];
// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) { 
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//   }
//   return gifts;
// }

// wrapGifts(gifts);

const names = [ "Ali", "Mosa", "Sally"]
let event = "birthday"

function writeCards(names,event) {
    let messeges = []
for ( let i = 0 ; i < names.length ; i++ ) {
    messeges.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    debugger;
}
return messeges
}
writeCards(names, event); 
console.log(names.length)


let number = 10
function countDown(number){
    while(number >= 0 ){
        console.log(number)
        number--
    }
    }
countDown(number)