// Task 9: Write a function that receives a number from the user and prints to the console all numbers between 
// 1 and 1000 that are divisible by the user's number without remainder.

function getDivisibleNum(number){
    
    for (let index = 0; index <= Number(number); index++) {
         if(Number(number)%index==0){
            console.log(index);
         }
        
    }
}
function diviseNum(){
    
    const number=document.getElementById('num').value;
    getDivisibleNum(number)
}