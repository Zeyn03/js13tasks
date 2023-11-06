
// Task 5: Write a function that receives 3 numbers from the user 
// (average annual temperature in different countries) and prints them to the console in descending order.

function compareNumbers(){
    const firstNumber=document.getElementById('firstAvgTemp').value;
    const secondNumber=document.getElementById('secondAvgTemp').value;
    const thirdNumber=document.getElementById('thirdAvgTemp').value;

    const numArray=[firstNumber,secondNumber,thirdNumber];
   
    console.log(numArray);
    let max=numArray[0];
    let min=numArray[0];
    let middleNum=0;
    for (let i = 0; i < numArray.length; i++) {
        if(max<=numArray[i]){
            max=numArray[i];
        };
        if(min>=numArray[i]){
            min=numArray[i]
        };
    };
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i]!=min &numArray[i]!=max){
            middleNum=numArray[i];
        };

        
    };
    const newArray=[max,middleNum,min];
    console.log(newArray);

};