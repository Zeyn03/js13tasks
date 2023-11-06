// Task 8: Write a function (that might be a part of a chatbot program) that converts the numeric representation of 
// a two-digits number to text. For example, typing "25" will return "twenty five" as the result. 
// *Please note: if you are going to write a switch for 90 options, this is far from the most optimal way. 
// Consider separating tens and ones.


const firstValue={
    2:'twenty',
    3:'thirty',
    4:'fourty',
    5:'fifty',
    6:'sixty',
    7:'seventy',
    8:'eightty',
    9:'ninety'
}
const secondValue={
    0:'',
    1:'one',
    2:'two',
    3:'three',
    4:'four',
    5:'five',
    6:'six',
    7:'seven',
    8:'eigth',
    9:'nine'
}
const fisrtOneValue={
    0:'ten',
    1:'eleven',
    2:'twelve',
    3:'thirteen',
    4:'fourteen',
    5:'fifteen',
    6:'sixteen',
    7:'seventeen',
    8:'eigtteen',
    9:'nineteen'
}

function convertText(){
    let number=document.getElementById('mainNum').value;
    const firstDigit=Math.trunc(Number(number)/10)
    const secondDigit=Number(number)%10;
    
    if(firstDigit==1) {
        for (let i = 0; i < Object.keys(fisrtOneValue).length; i++) {
            if (secondDigit==Object.keys(fisrtOneValue)[i]){
                console.log(Object.values(fisrtOneValue)[i])
            }
            
        }
    }
    if(firstDigit>1 && firstDigit<=9){
        for (let i = 0; i < Object.keys(firstValue).length; i++) {
            if (firstDigit==Object.keys(firstValue)[i]){
                console.log(Object.values(firstValue)[i])
                
            }  
         
        }
        for (let j = 0; j < Object.keys(secondValue).length; j++) {
            if (secondDigit==Object.keys(secondValue)[j]){
                console.log(Object.values(secondValue)[j])
            }
         
        }
     
        
    }

  

}
