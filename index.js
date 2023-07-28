/*
*Author:Md Sholayman
*Description:First assignment project in MERN-stack Development Course.
*Date : 28 July , 2023
*/

//topic-1:Online Store Discount Calculator (If-Else Statement)

function disCalculator(amount){
if(amount<50){
    console.log("No discount is available");
}
else if(amount >=50 || amount <=100 ){
  const discount = (amount * 5)/100
  const total = amount - discount
  console.log(total);
}
else if(amount >100 || amount <=200){
    const discount = (amount * 10)/100
    const total = amount - discount
    console.log(total);
}
else if(amount >= 200){
    const discount = (amount * 15)/100
    const total = amount - discount
    console.log(total);
}

}

disCalculator(250)

