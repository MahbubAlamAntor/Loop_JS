//for decrement

// for (let i = 10; i>=0; i--){
//     console.log(i);
// }

//while decrement

// let i = 20;
// while (i>=10){
//     console.log(i);
//     i--;
// }


// for (let i = 1; i <=20; i+=2){
//     console.log(i);
// }


// for (let i =1; i<=20; i++){
//     if(i%2!==0){
//         console.log(i)
//     }
// }

// for (let i =0; i<=20; i++){
//     if(i%3===0){
//         console.log(i)
//     }
// }


// for (let i =0; i<=20; i++){
//     if(i%5===0 || i%3===0){
//         console.log(i)
//     }
// }

// for (let i =0; i<=20; i++){
//     if(i%5===0 && i%3===0){
//         console.log(i)
//     }
// }

let sum = 0;
for(let i=10; i<=20; i++){
    if(i%3===0){

        sum = sum+i;
    }
}
console.log('total', sum)