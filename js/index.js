
const heroImage = document.querySelector(".heroImage")
const heroImageRow = document.querySelector("#heroImageRow")
const navbar = document.querySelector(".navbar")
const container = document.querySelector(".container");
const logout = document.querySelector("#logout")
import { baseUrl } from "./settings/api.js";


logout.addEventListener("click", logoutStorage);


const loginNeeded = document.querySelector("#login-needed");

const username = localStorage.getItem("username");

if(!localStorage.getItem("token")) {

    loginNeeded.style.display= "none";
    logout.style.display= "none";

  
} else {
    navbar.innerHTML+= `<p>Hello ${username}!</p>`
}



function logoutStorage () {

    localStorage.removeItem("token");
    location.href="index.html"


}




heroImage.innerHTML = `<p class="text-center loading mx-auto">Loading Products..</p>`;


var loadFeaturedProducts = async () => {

   
try {
        const res = await fetch(baseUrl + "/products");
        const json = await res.json();

 heroImage.innerHTML= "";
        const resHero = await fetch (baseUrl+ "/home");

        const jsonHero = await resHero.json();

        console.log(jsonHero.hero_banner.url);

       const heroUrl = jsonHero.hero_banner.url;


        
        heroImage.innerHTML += `
       <div class="col-sm-6"><div class="row"><h1>Stone </h1><p class="text-center stone">-experience timelessness</p></div></div> <div class="col-sm-6 hero-image"> <div class="background-border"><img  src="${heroUrl}" alt="HTML tutorial" style= "width:100%; object-fit:cover;" ></div></div>`
      
       
        json.forEach(function featuredProducts (products) {

       if(products.featured) {
        console.log(products.title)
    

          heroImageRow.innerHTML += `<div class="col-sm-6 spacing  "> <a  href="details.html?id=${products.id}"><div style="background-image: url('${products.image_url}'); height:400px"> 
         <div class="button-container"> <button id="index-button" class="btn btn-primary mx-auto">${products.title}</button></div></a> </div></div>   ` //alt is the alternative

   
    


        }})
       



   



} catch(err) {
    console.log(err);
}
}  

loadFeaturedProducts();



