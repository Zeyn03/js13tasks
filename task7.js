// Task 7: The shipping service accepts only orders that meet the following conditions as a small shipment:
// - The sum of the length, width and height of an item does not exceed 150cm;
// - None of the measurements exceed 100cm;
// - The weight of the shipment does not exceed 10 kg;
// - Delivery distance is in the range of 3 to 10km.
// Write a function that will receive data from the user about the shipment and report whether it is small.
const shipmentDiv=document.getElementById('shipment');
const shipmentP=document.createElement('p');
shipmentDiv.appendChild(shipmentP);
let sumMeasure=0;
function giveInfo(length,height,width,weight,distance){
    sumMeasure=Number(length)+Number(height)+Number(width);
    if (sumMeasure<=150 && (Number(length)<=100 && Number(height<=100)  && Number(width<=100)) && Number(weight<=10) && Number(distance>=3) && Number(distance<=10)){
       console.log('small shipment');
       shipmentP.innerText='it is small shipment';
    }else{
        console.log(' not small shipment');
        shipmentP.innerText='it is  not small shipment';
    }
}
function reportShipment(){
    const itemLength=document.getElementById('itemLength').value;
    const itemHeight=document.getElementById('itemHeight').value;
    const itemWidth=document.getElementById('itemWidth').value;
    const itemWeight=document.getElementById('itemWeight').value;
    const deliveryDistance=document.getElementById('deliveryDistance').value;
    giveInfo(itemLength,itemHeight,itemWidth,itemWeight,deliveryDistance);
}
