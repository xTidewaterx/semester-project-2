
import { getExistingFavs } from "./utils/favFunction.js";
import { baseUrl } from "./settings/api.js";

const url = baseUrl + "/products";

const searchBar = document.getElementById('searchBar');
const colContainer = document.querySelector('#column');

const favourites = getExistingFavs();
let ourProducts = [];


const loginNeeded = document.querySelector("#login-needed");



if(!localStorage.getItem("token")) {

    loginNeeded.style.display= "none";
}




searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredProducts = ourProducts.filter((product) => {
        return (
            product.title.toLowerCase().includes(searchString.trim()) ||
            product.description.toLowerCase().includes(searchString.trim())

        );
    });
    displayProducts(filteredProducts);
});





const loadProducts2 = async () => {
    try {
        const res = await fetch('https://strapi-sp2-noroff.herokuapp.com/products');
        ourProducts = await res.json();
        
        





        displayProducts(ourProducts);
        console.log(ourProducts) //this is our json hpCharacters

  

    } catch (err) {
        console.error(err);
    }
};


var loadProducts = async function  ( ) {


    const res = await fetch(url);

    const ourProducts = await res.json();

console.log(ourProducts.title);

   

    displayProducts(ourProducts);
}

console.log(loadProducts)

console.log(loadProducts2)


const cssVariable = "fa-solid fa-cart-shopping";


const displayProducts = (products) => {
    const htmlString = products
        .map((products) => {
            return `
        
     <div class="col-lg-4 d-flex justify-content-center mt-5 ">
         <div class="card" style="width: 18rem; height: 30rem; object-fit:cover";>
         
             <div class="card-body">
        
                 <a href="details.html?id=${products.id}" >

                  <img src="${products.image_url}" class="card-img-top" alt="..." style="height: 18rem; object-fit:cover">
                 <div class="container" style= "margin-top: 50px">
                  <h3 class="card-title text-center">${products.title}</h3>
  
                 </a> 
               <i  data-id="${products.id}" data-title="${products.title}" data-price="${products.price}" data-image="${products.image_url}"> </i>  </div>
               </div>
             </div>   
         </div>
    </div>   
        `;
        })
        .join('');
    colContainer.innerHTML = htmlString;

    const favButtons = document.querySelectorAll(".card i");

    favButtons.forEach(function(item) {
        item.addEventListener("click", handleClick2);
    })

    
    function handleClick2 () {

        console.log ("hhh")
    }
//cart symbol:    if (productExists === undefined) {css class =fa-regular fa-cart-shopping} else fa-solid






    
favButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
});

function handleClick() {

   const id = this.dataset.id;
   const title  = this.dataset.title;
   const price = this.dataset.price;
   const imageUrl = this.dataset.image;
   console.log(id);
   console.log(price)
   

 const cartIcon ="";
   
   const currentFavs = getExistingFavs();

   const productExists = currentFavs.find(function (fav) {  //here we do some getItem from localstorage, then return values in foreach loop

    return fav.id === id;
   });


   if (productExists === undefined) {

     favButtons.className = " ${cartIcon} fa-solid fa-cart-plus float-end";
    const product = {id: id, title: title, price: price, image_url: imageUrl };

    currentFavs.push(product);
    saveFavs(currentFavs);
   } else {
    favButtons.className = "hello";
    const newFavs = currentFavs.filter((fav) => fav.id !== id);  //if our value exists in localstorage before the current reaction, then we create a new array with only the existing values that are different from our click, so by trying to  double insert a data object we know it was favourite and now is changed
  saveFavs(newFavs) }


    }
}






function saveFavs(favs) {

    localStorage.setItem("favourites", JSON.stringify(favs));
}
  
  


 

 loadProducts2();







