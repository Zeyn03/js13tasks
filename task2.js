// Task 2: The courier service delivers at a single rate: 5 AZN fixed + 0.25 AZN for each kilometer of the road. 
// Write a function that will prompt the user for the distance in km and return the cost of delivery.


let get_cost_btn=document.getElementById('getCost');
get_cost_btn.addEventListener('click',function returnCost(){
    const distance_km=document.getElementById('distance').value;
    const cost=5+distance_km*0.25;
    const get_cost_div=document.getElementById('get_cost');
    let newElem=document.createElement('p');
    get_cost_div.appendChild(newElem);
    newElem.innerHTML=cost;
    

    console.log(cost);
    
})