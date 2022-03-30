/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts) 

*/

function writeCards(names, event) {
    let cardNames = []
    for (let i = 0; i < names.length; i++)
        cardNames.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    return cardNames;
 }

 function countDown(number) {
     let i = 10;
     while (i >= 0){
     console.log(i);
     i --;
 }
 return i;
}






