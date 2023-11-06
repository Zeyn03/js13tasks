// Task 10: Write a function that calculates the amount of a bank deposit at the end of its term.
//  The function asks the user for 3 numbers (initial amount, duration in years, % per year) and 
//  returns the amount of savings after the deposit expires. Please note that interest on the deposit is 
//  calculated once a year on the entire amount. For example, with a deposit of 1000 at 10%, 
// at the end of the first year, the total amount will be 1100, and at the end of the second year it will be 1210.
const depositDiv=document.getElementById('depositDiv')
const depositP=document.createElement('p')
depositDiv.appendChild(depositP)
function getData(initialAmount,years,percentage){
    let deposit=0
    for (let index = 1; index <= Number(years); index++) {
        deposit=Number(initialAmount)+(Number(initialAmount)*Number(percentage))/100
        initialAmount=deposit
        depositP.innerText='The total amount is:'+deposit
       
    }
    
    return deposit    

}
function showDeposit(){
    let firstAmount=document.getElementById('initialAmount').value;
    let durationYears=document.getElementById('durationYears').value;
    let percentage=document.getElementById('percentage').value;
    getData(firstAmount,durationYears,percentage);

}