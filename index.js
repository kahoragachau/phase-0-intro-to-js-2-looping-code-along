// Code your solutions in this file
const cards = ["Guadalupe", "Ollie", "Aki"];
let numCount = 10

function writeCards(){
    let newArray = []
    for (let i = 0; i<cards.length; i++){        
        newArray.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
    }
    return newArray
}

function countDown(){
    for (let i = 10; i > -1; i--){
        console.log(i)
    }
}