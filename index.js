var resultdiv = null;
var numPeopleCurrent = 0;
var numPeopleInput = null;

window.onload=()=>{
    //Get references to input elements
    numPeopleInput = document.getElementById("numPeople");
    var isJeremyCheckbox = document.getElementById("isJeremy");
    resultdiv = document.getElementById("result");
    //Set up listeners
    numPeopleInput.addEventListener("input",()=>update(numPeopleInput.value,isJeremyCheckbox.checked));
    isJeremyCheckbox.addEventListener("change",()=>update(numPeopleInput.value,isJeremyCheckbox.checked));
    //Initial calculation
    calculate(numPeopleInput.value,isJeremyCheckbox.checked);
};
//Function to calculate how much pizza to get
var update = (numPeople,isJeremy)=>{
    //Validation of numeric input
    if(numPeople.match(/^\d+$/)){

        calculate(numPeople,isJeremy);
    }
    else{
        if(numPeople.length>0){
            numPeopleInput.value=numPeopleCurrent;  
        }else{

            calculate(0,isJeremy);
        }
    }
};
var calculate = (numPeople,isJeremy)=>{
    numPeopleCurrent = numPeople;

    var numGarlicPackets = isJeremy?Math.ceil(numPeople/2):Math.ceil((numPeople-1)/4);
    var proposedNumPizza = Math.ceil(numPeople*1.15);
    var numPizza=numPeople<=2?numPeople:proposedNumPizza;
    

    var result = "Pizza: " + numPizza.toString() + "\n Garlic breed: " + numGarlicPackets.toString();
    
    resultdiv.innerHTML = result;
    
};