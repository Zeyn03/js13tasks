// Task 11: The coffee house has a complex system for giving loyalty points to regular customers:
// For the first two orders, 1 point is awarded. For the next - the sum of the two previous ones. 
// For example, here are the points that will be given for the first 8 orders: 1, 1, 2, 3, 5, 8, 13, 21. 
// Write a function that will receive a number from the user (the order number) and will return the number of
//  loyalty points to be given.
customerArray=[
    customer1={
        orderNumber:1,
        totalOrder:5
    },
    customer2={
        orderNumber:2,
        totalOrder:9
    },
    customer3={
        orderNumber:3,
        totalOrder:3
    },
    customer4={
        orderNumber:5,
        totalOrder:2
    },
    customer5={
        orderNumber:5,
        totalOrder:8
    },
]

function getOrderNum(orderNum){
    let award=0
    let award1=0;
    let award2=0;
    const awardArray= []
    for (let i = 0; i < customerArray.length; i++) {
       
        if(orderNum==customerArray[i].orderNumber){
            for (let index = 0; index <customerArray[i].totalOrder; index++) {
                if(index==0){
                    award1=1
                    awardArray.push(award1)
                }
                if(index==1){
                    award2=1
                    awardArray.push(award2)
                    
                }
                
                if(index>1){
                    for (let j =( (customerArray[i].totalOrder)-((customerArray[i].totalOrder)-2)); j <customerArray[i].totalOrder; j++) {
                        award=awardArray[j-1]+awardArray[j-2]
                        awardArray.unshift(award)
                        break; 
                        
                    }
                    if (awardArray.length>customerArray[i].totalOrder){
                        awardArray.slice(0,customerArray[i].totalOrder-1)
                    }
                    console.log(awardArray)
                   
                }
  
            }
            
        
            
        }
        
    }
    
    
}
function showLoyaltyNum(){
    const orderNum=document.getElementById('orderNum').value;
    getOrderNum(orderNum)
}