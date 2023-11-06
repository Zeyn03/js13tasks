// Task 3: Each product in the online store receipt is described by the following values:
// - Name;
// - Unit price;
// - Quantity;
// - Participates in the promotion (yes/no).
// Write a function that receives the listed values and calculates the receipt’s amount according to the following rules:
// - If the quantity of the product is greater than or equal to 5, then a 10% discount is applied to the product. 
// - If the product participates in the promotion, a 15% discount is applied.
// Discounts may be cumulative.
const billDiv=document.getElementById('bill');
const bill=document.createElement('p');
billDiv.appendChild(bill);
let totalAmount=0
    

function getInfo(unitPrice,quantity,promotion){
   
   
    if (Number(quantity)>=5){
        console.log(Number(quantity))
        totalAmount=(Number(unitPrice)*Number(quantity))-((Number(unitPrice)*Number(quantity))*10/100)
        bill.innerText=totalAmount+'  you get 10% discount';
        console.log(totalAmount)
    }
    if(promotion=='yes'|| promotion=='Yes'){
        totalAmount=(Number(unitPrice)*Number(quantity))-((Number(unitPrice)*Number(quantity))*15/100)
        bill.innerText=totalAmount+'  you get 15% discount';
        console.log(totalAmount)

    }
    if(Number(quantity)>=5 && (promotion=='yes' || promotion=='Yes')){
        totalAmount=(Number(unitPrice)*Number(quantity))-((Number(unitPrice)*Number(quantity))*25/100)
        bill.innerText=totalAmount+ '  you get 25% discount';
        console.log(totalAmount) 
    }else{
        totalAmount=Number(unitPrice)*Number(quantity);
        bill.innerText=totalAmount
        console.log(totalAmount)
    }


}
function buyProduct(){
    let productName=document.getElementById('productName').value;
    let unitPrice=document.getElementById('unitPrice').value;
    let quantity=document.getElementById('quantity').value;
    let promotion=document.getElementById('promotion').value;
    getInfo(unitPrice,quantity,promotion)
}





