// Task 4: There are several types of seats in the restaurant:
// 1. Small table - up to 2 people;
// 2. Medium table - up to 4 people;
// 3. Large table - up to 8 people.
// The restaurant will not be able to accommodate a company of more than 8 people within one table :’-(
// Write a function that will receive the number of guests from the user and suggest the most suitable table.

const tableArray=[];
const smallTable={
    count:2
};
tableArray.push(smallTable);
const mediumTable={
    count:4
};
tableArray.push(mediumTable);
const largeTable={
    count:8
};
tableArray.push(largeTable);
console.log(tableArray);

const suitableTable=document.getElementById('suitableTable');
const showSuitableTable=document.createElement('div');
suitableTable.appendChild(showSuitableTable);

function getTable(){
    let countGuest=document.getElementById('countguest').value;
    
    for (let i = 0; i < tableArray.length; i++) {
      
        if (countGuest==0) return;
        if (countGuest<=tableArray[i].count){
            showSuitableTable.innerText=tableArray[i].count;
            console.log(tableArray[i].count);
            break;
        }else{
            showSuitableTable.innerText='There is no permisson to more than 8 people in one table'
        }
        
    };
};

