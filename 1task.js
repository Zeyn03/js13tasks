// Task 1: The company needs to automate the customer registration process. 
// Write a function that will prompt the user for their last name, first name, and email address. 
// After the user's response, the function should return a string of the format:
// "*Mail* - *LastName* *FirstName*".

let dataString=''
function getData(){
    let email=document.getElementById('emailAddress').value;
    let lastName=document.getElementById('lastName').value;
    let firstName=document.getElementById('firstName').value;
    

    
    dataString+=email+'-'+lastName+' '+firstName;
    console.log(dataString)

}







