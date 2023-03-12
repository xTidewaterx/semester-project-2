
const container = document.querySelector("#container");
//const container with cols-md number

const totalSumContainer = document.querySelector("#totalSumContainer")
//we need a connection to the localstorage container

const loginNeeded = document.querySelector("#login-needed");



if(!localStorage.getItem("token")) {

    loginNeeded.style.display= "none";
}



const array = localStorage.getItem("favourites");

const cartItemsArray = JSON.parse(array);

console.log(array);


const priceArray = [];


if (!cartItemsArray) { 
    container.innerHTML+= `   <div class="col"> The cart is empty, add items through our products page</div>`
}


newArray =
cartItemsArray.filter(favourite => favourite.title.length > 0);



console.log(newArray);

const numberOfCartItems = cartItemsArray.length;

console.log(numberOfCartItems);

cartItemsArray.forEach( function functionName(favourites) {








    container.innerHTML += `
    

    <div class="row border-top border-bottom">
    <div class="row main align-items-center"><div class="col-2"><img class="img-fluid" style="object-fit:cover" src="${favourites.image_url}"></div>
    <div class="col"> 
    <div class="row text-muted">${favourites.title}</div>
    <div class="row">${favourites.title}</div>
</div>
<div class="col">
    <a href="#"></a><a href="#" class="border">1</a><a href="#"></a>
</div>
<div class="col">&euro; ${favourites.price} <span class="close"> </span></div>
</div>
</div>


    `

priceArray.push(favourites.price)
 



})


console.log(priceArray);


const priceArrayNumbers = priceArray.map(str => {
    return Number(str);
});

console.log(priceArrayNumbers);

//function add together our number values from array object
const initialValue = 0;
const sumWithInitial = priceArrayNumbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
);
console.log(sumWithInitial);








const totalSum = 55;
totalSumContainer.innerHTML += `<h4>Total price = ${sumWithInitial}</h4>`

//array = localStorage.getItem(JSON.parse("favourites"));





const totalCartItems = document.querySelector("#number-of-cart-items");

const summaryItems = document.querySelector("#items-cart")


totalCartItems.innerHTML+= `Number of cart items: ${numberOfCartItems}`


summaryItems.innerHTML+= ` <div class="container">ITEMS ${numberOfCartItems}</div>`