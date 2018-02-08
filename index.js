var resultdiv = null;
window.onload=()=>{
    var number = document.getElementById("number");
    var jeremym = document.getElementById("jeremy");
    resultdiv = document.getElementById("result");

    number.addEventListener("input",()=>calculate(number.value,jeremym.checked));
    jeremym.addEventListener("change",()=>calculate(number.value,jeremym.checked));
};
var calculate = (numeric,jeremymode)=>{
    var resultGarlic = jeremymode?Math.ceil(numeric/2):Math.ceil((numeric-1)/4);
    //var garlicExcess = resultGarlic * 4 - numeric;
    var proposedPizza = Math.ceil(numeric*1.15);// - garlicExcess/4);
    var resultPizza=numeric<=2?numeric:proposedPizza;
    

    var result = "Pizza: " + resultPizza.toString() + "\n Garlic breed: " + resultGarlic.toString();
    
    resultdiv.innerHTML = result;
    
};