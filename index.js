
window.onload = function () {

    var resultDiv = null;
    var numPeopleCurrent = 0;
    var numPeopleInput = null;

    //Function to calculate how much pizza to get
    var update = function (numPeople, isJeremy) {
        //Validation of numeric input
        if (numPeople.match(/^\d+$/)) {

            calculate(numPeople, isJeremy);
        }
        else {
            if (numPeople.length > 0) {
                numPeopleInput.value = numPeopleCurrent;
            } else {

                calculate(0, isJeremy);
            }
        }
    };
    var calculate = function (numPeople, isJeremy) {
        numPeopleCurrent = numPeople;

        var numGarlicPackets = isJeremy ? Math.ceil(numPeople / 2) : Math.ceil((numPeople - 1) / 4);
        var proposedNumPizza = Math.ceil(numPeople * 1.15);
        var numPizza = numPeople <= 2 ? numPeople : proposedNumPizza;
        var iconLimit = 100;

        var result = [
            "Buy " + numPizza.toString() + "pizza" + (numPizza === 1 ? "" : "s") + " and " +
            numGarlicPackets.toString() + " pack" + (numGarlicPackets === 1 ? "" : "s") + " of garlic breed",
            "&#127829;".repeat(Math.min(iconLimit, numPizza)) + (numPizza > iconLimit ? "+" : ""),
            "&#127838;".repeat(Math.min(iconLimit, numGarlicPackets)) + (numGarlicPackets > iconLimit ? "+" : "")
        ];

        resultDiv.innerHTML = result.join("<br/>");

    };

    //Get references to input elements
    numPeopleInput = document.getElementById("numPeople");
    var isJeremyCheckbox = document.getElementById("isJeremy");
    resultDiv = document.getElementById("result");

    //Set up listeners
    numPeopleInput.addEventListener("input", function () { update(numPeopleInput.value, isJeremyCheckbox.checked) });
    isJeremyCheckbox.addEventListener("change", function () { update(numPeopleInput.value, isJeremyCheckbox.checked) });

    //Initial calculation
    calculate(numPeopleInput.value, isJeremyCheckbox.checked);
};
