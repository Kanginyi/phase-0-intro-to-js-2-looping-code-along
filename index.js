// Code your solutions in this file
/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);
*/

const writeCards = (array, event) => {
    const emptyArray = [];

    for (let i = 0; i < array.length; i++) {
        emptyArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }

    return emptyArray;
}

const countDown = (num) => {
    for (let i = num; num >= 0; num--) {
        console.log(num);
    }
}