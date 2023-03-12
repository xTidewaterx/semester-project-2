

import { getExistingFavs } from "./utils/favFunction.js";
import { baseUrl } from "./settings/api.js";



const productsList = document.getElementById('productsList');

const colContainer = document.querySelector('#column');
const descriptionContainer = document.querySelector(".description");
const favourites = getExistingFavs();
let ourProducts = [];
const product = [];
const productArray = [];

const loginNeeded = document.querySelector("#login-needed");



if(!localStorage.getItem("token")) {

    loginNeeded.style.display= "none";
}




let params = new URLSearchParams(document.location.search)

let productId = params.get("id");

console.log(productId);


const url = baseUrl + "/products/" + productId;






async function fetchDetails2 () {



    const response = await fetch(url);

    const json = await response.json();


    console.log(json);

    const json2 = [ {fruit:"apple"}, {fruit:"orange"},]



    json2.forEach(function fetchProduct(product) {


        colContainer.innerHTML= `<h1>${product.fruit}</h1>`
    })
}





























































const ourI = [];























const fetchDetails = async () =>  {

//I am aware that you can also do this:  async functionName (parameterName) { function statements}


    const res = await fetch(url);

    const selectedProduct = await res.json();

console.log(selectedProduct.id)

console.log(selectedProduct.id)

const doesObjectExist = favourites.find(function (fav) {
    console.log(fav);

    return parseInt(fav.id) === selectedProduct.id;

});

var cssVariable;


if(!doesObjectExist) {
    console.log("Nothing here hahahahaaaa");
  
var cssVariable ="fa-solid fa-cart-plus";
console.log(cssVariable);
} else {
    var cssVariable ="fa-solid fa-cart-shopping";
    
}


console.log(cssVariable)

console.log(doesObjectExist);

 colContainer.innerHTML= `
 
 <div class="details card" >
 <div class="row">

 
 <img class="col-sm-6 rounded mx-auto d-block" src="${selectedProduct.image_url}" alt="${selectedProduct.description}" >

 

 <div class="col-sm-6">
 <div class="container mx-auto" id="details-triad">
 <h1 style="text-align: center">${selectedProduct.title}</h1>
 <p class ="price" style="text-align: center">Price: &euro; ${selectedProduct.price}</p>
 <div class ="container text-center">
 <button class="btn btn-primary"><i class=" ${cssVariable}"   data-id="${selectedProduct.id}" data-title="${selectedProduct.title}" data-price="${selectedProduct.price}" data-image="${selectedProduct.image_url}"> Add to cart</i> </button>  </div>
 </div></div>
 <div class="col-sm-12"><h2 class="text-center">Description:</h2><p>${selectedProduct.description}</p></div>
 
 
 </div>




`













const favButtons = document.querySelectorAll("i");



favButtons.forEach(function(item) {
    item.addEventListener("click", handleClick);









function handleClick() {

   const id = this.dataset.id;
   const title  = this.dataset.title;
   const price = this.dataset.price;
   const imageUrl = this.dataset.image;
   console.log(id);
   console.log(price)


   
   const currentFavs = getExistingFavs();

   const productExists = currentFavs.find(function (fav) {  
    return fav.id === id;
   });


   if (productExists === undefined) {
    console.log("hhh")

     favButtons.className = "fa-solid fa-cart-plus float-end";
    const product = {id: id, title: title, price: price, image_url: imageUrl };

    currentFavs.push(product);
    saveFavs(currentFavs);
   } else {
    favButtons.className = "hello";
    const newFavs = currentFavs.filter((fav) => fav.id !== id);  
  saveFavs(newFavs) }


    }})







function saveFavs(favs) {

    localStorage.setItem("favourites", JSON.stringify(favs));
}
  
  


 

 


}



fetchDetails();

