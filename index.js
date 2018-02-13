
window.onload = function () {

    // Store for the last valid input for the number of people
    var numPeopleCurrent = 0;

    // Get references to input elements
    var numPeopleInput = document.getElementById("numPeople");
    var isJeremyCheckbox = document.getElementById("isJeremy");
    var resultDiv = document.getElementById("result");

    // Function to calculate how much pizza to get
    var update = function () {
        var numPeople = numPeopleInput.value;

        //Validation of numeric input
        if (numPeople.match(/^\d+$/)) {

            calculate(numPeople);
        }
        else {
            if (numPeople.length > 0) {
                numPeopleInput.value = numPeopleCurrent;
            } else {
                calculate(0);
            }
        }
    };

    var calculatePizzas = function (numPeople) {
        var proposedNumPizza = Math.ceil(numPeople * parameters.minPizzasPerPerson);
        return numPeople <= 2 ? numPeople : proposedNumPizza;
    }
    var calculateGarlicBreeds = function (numPeople) {
        if (isJeremyCheckbox.checked) {
            return Math.ceil(numPeople * parameters.garlicPacketsPerPerson * parameters.jeremyGarlicCorrectionFactor);
        } else {
            return Math.ceil((numPeople - 1) * parameters.garlicPacketsPerPerson);
        }
    }

    var makeEmojiString = function(string, numIcons) {
        // Repeat the string the number of times, but if the number is over the limit, just append a plus sign instead of adding more strings
        return string.repeat(Math.min(parameters.iconLimit, numIcons)) + (numIcons > parameters.iconLimit ? "+" : "");
    }

    var calculate = function (numPeople) {
        numPeopleCurrent = numPeople;

        var numPizza = calculatePizzas(numPeople);
        var numGarlicPackets = calculateGarlicBreeds(numPeople);

        var result = [
            "Buy " + numPizza.toString() + " pizza" + (numPizza === 1 ? "" : "s") + " and " +
            numGarlicPackets.toString() + " pack" + (numGarlicPackets === 1 ? "" : "s") + " of garlic breed",
            makeEmojiString("&#127829;", numPizza),
            makeEmojiString("&#127838;", numGarlicPackets),
            "Optionally, you could also buy " + numPeople + " oranges, (or other fruit), and " + numPeople + " dessert items.",
            makeEmojiString("&#127818;", numPeople),
            makeEmojiString("&#127850;", numPeople),
            "Don't forget the squaish either!"
        ];

        resultDiv.innerHTML = result.filter(x => x.length > 0).join("<br/>");

    };


    //Set up listeners
    numPeopleInput.addEventListener("input", update);
    isJeremyCheckbox.addEventListener("change", update);

    //Initial calculation
    update();
};
