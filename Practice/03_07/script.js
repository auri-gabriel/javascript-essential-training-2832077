/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const waterBottle = {
    brand: "Agua da Pedra",
    waterAmount: 60,
    drinkWater: function (amountDrinked) {
        this.waterAmount = this.waterAmount - amountDrinked;
    },
}

const computerKeyboard = {
    numberOfKeys: 107,
    type: "ABNT-2",
    connectedToDevice: true,
    numLock: true,
    capsLock: false,
    scrollLock: false,
    toggleConnection: function () {
        this.connectedToDevice = this.connectedToDevice ? false : true;
    },
    toggleNumLock: function () {
        this.numLock = this.numLock ? false : true;
    },
    toggleCapsLock: function () {
        this.capsLock = this.capsLock ? false : true;
    },
    toggleScrollLock: function () {
        this.scrollLock = this.scrollLock ? false : true;
    }
}

const wallet = {
    money: [
        {
            amount: 13,
            currency: "BRL",
        },
        {
            amount: 1,
            currency: "USD",
        },
    ],
    cards: [
        {
            bank: "Wise",
            network: "Visa",
            isDebit: true,
            isCredit: false,
            limit: null,
        },
        {
            bank: "Banco Inter",
            network: "MasterCard",
            isDebit: true,
            isCredit: true,
            limit: {
                amount: 1000,
                currency: "BRL",
            },
        },


    ],
}

