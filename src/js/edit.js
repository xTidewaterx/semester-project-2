

import { baseUrl } from "./settings/api.js";
import { getToken } from "./utils/storage.js";
import {deleteButton} from "./components/products/deleteButton.js";

import displayMessage from "./components/common/displayMessage.js";


const deleteButtonVariable = document.querySelector("#deleteButton");


deleteButtonVariable.addEventListener("click", deleteButton);



const idInput2 = document.querySelector ("#productID")

idInput2.addEventListener("input", createId);



const addButton = document.querySelector("#add-button");



const idButton = document.querySelector("#idButton");

idButton.addEventListener("click", chooseId);

const updateButton = document.querySelector("update-button");



console.log(getToken());




addButton.addEventListener("click", submitForm2)












const featuredTrue = document.querySelector("#inlineRadio2");

if(featuredTrue.checked) {
    console.log("it is checked");
}


const checked = featuredTrue.checked;

console.log(checked);












function createId (e) {

    const idInputValue = e.target.value;

    const currentId = idInputValue;

  

    localStorage.setItem("editId", currentId);

console.log(currentId)



return localStorage.getItem(e);
  }


  async function fetchData () {

    const ourId = localStorage.getItem("editId");

    console.log(ourId);
    try {
        const response = await fetch(  baseUrl + "/products/" + ourId);
        const details = await response.json();

        console.log(details.title);




        name.value = details.title; //we have our title here
        price.value = details.price;
        description.value = details.description;
        idInput.value = details.id;
        image.value = details.image_url;

        //   deleteButton(details.id);
        console.log(details);
    } catch (error) {
        console.log(error);
    } finally {
        loading.style.display = "none";
        form.style.display = "block";
    }
} 



function chooseId () {

    confirm ("Click yes to confirm ID")
  if(confirm) { 

    fetchData();
  
   
  }



}











//PUT function


















//const id = 1;
const editId = localStorage.getItem("editId");

const productUrl = baseUrl + "/products/" + editId;
console.log(productUrl);



const form = document.querySelector("form");
const name = document.querySelector("#name");
const price = document.querySelector("#price");
const image = document.querySelector("#imageUrl");
const description = document.querySelector("#description");
const idInput = document.querySelector("#id");
const message = document.querySelector(".message-container");
const loading = document.querySelector(".loading");
























form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const nameValue = name.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const imageValue = image.value.trim();
    console.log(imageValue);
   // const idValue = idInput.value;

    if (nameValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
        return displayMessage("warning", "Please supply proper values", ".message-container");
    }



    updateProduct(nameValue, priceValue, descriptionValue, imageValue); // I changed this, removed idValue
}

async function updateProduct(name, price, description, image) {
    
    
    
        try {
    
    const putId = localStorage.getItem("editId");
    
    const url = baseUrl + "/products/" + putId;
    const data = JSON.stringify({ title: name, featured: true, image_url: image, description: description }); //with this array we communicate hight up there, we have the array that is request into the language of arrays curly braces and commas, it is happy

   console.log(url);
   
   
    const token = getToken();

    const options = {
        method: "PUT",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };


        const response = await fetch(baseUrl +"/products/" + putId, options);
        const json = await response.json();
        console.log(json);
        console.log(editId);

        if (json.updated_at) {
            displayMessage("success", "Product updated", ".message-container");
        }

        if (json.error) {
            displayMessage("error", json.message, ".message-container");
        }
    } catch (error) {
        console.log(error);
    }
}

//put function stop







function submitForm2(event) {
    event.preventDefault();

    message.innerHTML = "";

    const nameValue = name.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const imageValue = image.value.trim();
    const checked = featuredTrue.checked;

  


    console.log(imageValue);
   // const idValue = idInput.value;

    if (nameValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
        return displayMessage("warning", "Please supply proper values", ".message-container");
    }



    addProduct(nameValue, priceValue, descriptionValue, imageValue, checked); // I changed this, removed idValue
}











async function addProduct(name, price, description, imageUrl, featured) {
    const url = baseUrl + "/products";

    const data = JSON.stringify({ title: name, price: price, image_url: imageUrl, description: description, featured: featured });

    const token = getToken();

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if (json.created_at) {
            displayMessage("success", "Product created", ".message-container");
            form.reset();
        }

        if (json.error) {
            displayMessage("error", json.message, ".message-container");
        }

        console.log(json);
    } catch (error) {
        console.log(error);
        displayMessage("error", "An error occured", ".message-container");
    }
}