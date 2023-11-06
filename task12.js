// Task 12: The food delivery company assigns an individual code (an integer number) to the each registered customer.
//  Once a month, a promotion is held, as a result some users receive a discount. To become a winner, the sum of the digits
//   of user’s individual code must be equal to a pre-selected number. 
// Write a function that will receive an individual code from the user and will return the sum of the digits of this code.

let sum=0;
function showIndividualCode(){
    let individualCode=document.getElementById('individualCode').value;
    while(Number(individualCode)>0){
        
        sum+=(individualCode%10)
        individualCode=Math.trunc(individualCode/10)   
    }
    console.log(sum)
}