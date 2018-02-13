var parameters = function() {
    // Maximum number of icons which are shown on the screen as a visual representation of pizza
    var iconLimit = 100;
    // How many sticks of garlic bread in a packet
    var garlicSticksPerPacket = 2;
    // How many sticks of garlic bread per person
    var garlicSticksPerPerson = 0.5;
    // Jeremy factor - how much extra garlic bread does Jeremy buy?
    var jeremyGarlicCorrectionFactor = 2;
    // Minimum number of pizzas to buy per person
    var minPizzasPerPerson = 1.15;

    // Calculated parameters
    var garlicPacketsPerPerson = garlicSticksPerPerson / garlicSticksPerPacket;

    // Publicly available parameters
    return {
        iconLimit: iconLimit,
        garlicPacketsPerPerson: garlicPacketsPerPerson,
        jeremyGarlicCorrectionFactor: jeremyGarlicCorrectionFactor,
        minPizzasPerPerson: minPizzasPerPerson
    }
}();