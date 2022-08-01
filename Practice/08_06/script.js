/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */
const waterBottle = {
    brand: "Agua da Pedra",
    amount: 60,
    drinkWater: function (amountDrinked) {
        this.amount = this.amount - amountDrinked;
    },
}


function addBottle(bottle) {

    let article = document.createElement('article');

    article.innerHTML = `
    <l1><b>Brand:</b> ${bottle.brand}</li>
    <l1><b>Amount:</b> ${bottle.amount}%</li>
    `;
    return article;
}

let bottles = [
    sodaBottle = {
        brand: "Coca-Cola",
        amount: 95,
    },
    carbonatedWaterBottle = {
        brand: "Agua da Pedra",
        amount: 100,
    },
    energyDrinkBottle = {
        brand: "Red Bull",
        amount: 100,
    },
]

let createArticleWithMultipleBottle = (bottles) => {
    let article = document.createElement('article');
    bottles.forEach(element => {
        bottleInfo = document.createElement('li');
        bottleInfo.innerHTML = `<l1><b>Brand:</b> ${element.brand}</li>
                                <l1><b>Amount:</b> ${element.amount}%</li>
                                `;
        article.append(bottleInfo);
    });
    return article;
}


let main = document.querySelector("main");

let a = addBottle(waterBottle);


main.append(a);
main.append(createArticleWithMultipleBottle(bottles));
