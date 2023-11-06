// Task 13: The ATM contains banknotes in denominations of 100, 50, 20, 10, 5 and 1 AZN.
//  Write a function that receives the amount requested from the ATM and returns the optimal banknotes for the user's request.
//   The option with the smallest number of banknotes is optimal. For example, when requesting 73 AZN, 
// it would be optimal to give one 50₼, one 20₼ and three 1₼ banknotes.
const banknotes=[
    hundred= {amount:100,count:0},
    fifty= {amount:50,count:0},
    twenty= {amount:20,count:0},
    ten= {amount:10,count:0},
    five= {amount:5,count:0},
    one= {amount:1,count:0}

]
let banknote=0;
let times=0
function divideCash(){
    let cash=document.getElementById('cash').value;
    
  

 
    while(cash>0){
        for (let i = 0; i < banknotes.length; i++) {
            if (cash>=banknotes[i].amount){
                cash-=banknotes[i].amount
                banknotes[i].count+=1
                banknote=banknotes[i].amount;
                times=banknotes[i].count
                break
                
            }
            console.log(times+'times '+banknote)
           
        }
        
    } 
}





  
