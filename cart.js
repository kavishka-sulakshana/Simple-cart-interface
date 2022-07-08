//pay button alert box
var payButton=document.getElementById("pyBtn");
var alertBox = document.getElementById("alertBx");
var navigation = document.getElementsByClassName("navbar")[0];
var content = document.getElementsByClassName("container")[0];
function funcPay(){
   
    alertBox.classList.toggle("alertBx");
    payButton.classList.add("disabled");
    navigation.classList.add("alertDis");
    content.classList.add("alertDis");

}

//alert box close button
function alertCls(){
    payButton.classList.remove('disabled');
    alertBox.classList.remove("alertBx");
    alertBox.classList.add("alertDis");
    navigation.classList.remove("alertDis");
    content.classList.remove("alertDis");
}