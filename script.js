// const phoneIncrease= document.getElementById("phone-increase").addEventListener('click', function(){
//     productCountHandler(true);
// });
// const phoneDecrease= document.getElementById("phone-decrease").addEventListener('click', function(){
//     productCountHandler(false);
// });

function getinput(product){
    const productCount= document.getElementById(product+ "-count");
    let productQuantity= parseInt(productCount.value);
    return productQuantity;
}

function productCountHandler(isIncrease, product, price){
    const productCount= document.getElementById(product+ "-count");
    let productQuantity= parseInt(productCount.value);
    if (isIncrease == true){
        productQuantity++;
    } else if(isIncrease== false && productQuantity>0){
        productQuantity--;
    }
    productCount.value= productQuantity;
    document.getElementById(product+ "-price").innerText= productQuantity* price;  

    calculateGrandTotal();
};

function calculateGrandTotal(){
    const phoneQuantity= getinput('phone');
    const caseQuantity= getinput('case');
    let totalPrice= phoneQuantity* 1219+ caseQuantity* 59;
    let tax= Math.round(totalPrice* 0.075);
    let grandTotal= totalPrice+ tax;

    document.getElementById('total-price').innerText= totalPrice;
    document.getElementById('tax').innerText= tax;
    document.getElementById('grand-total').innerText= grandTotal;
}