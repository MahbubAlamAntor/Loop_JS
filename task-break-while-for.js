// for (let i =1; i<=200; i++){
//     if(i>100){
//         break;
//     }
//     console.log(i)
// }

// let numbers = 1;
// let i = 1;
// while(numbers<=200){
//     number = numbers + i;
//     if(number>100){
//         break;
//     }
//     i++;
//     numbers++;
//     console.log(number);
// }

var numbers = [];

for(let i = 2; i<=100; i++){
    numbers.push(i*i)
    
}


for(let i = 1; i<=100; i++){
    if(!numbers.includes(i)){
    console.log(i)
   
}else{
    break;
}

    
}


