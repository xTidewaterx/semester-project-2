import displayMessage from "./components/common/displayMessage.js";
import { baseUrl } from "./settings/api.js";
import {  saveToken, saveUser } from "./utils/storage.js";




const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const message = document.querySelector(".message-container");

const loginNeeded = document.querySelector("#login-needed");
const navbar = document.querySelector(".navbar");


if(!localStorage.getItem("token")) {

    loginNeeded.style.display= "none";
   


   
}



form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue.length === 0 || passwordValue.length === 0) {
        return displayMessage("warning", "Invalid values", ".message-container");
    }

    doLogin(usernameValue, passwordValue);
}

async function doLogin(username, password) {
    const url = baseUrl + "/auth/local";  

    const data = JSON.stringify({ identifier: username, password: password });

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();
      
      


console.log(json);


      







      //token
      
      
        const saveToken2 = json.jwt;
        localStorage.setItem("token", saveToken);
        localStorage.setItem("username", json.user.username);

        const token2=   localStorage.getItem("token");
        console.log(saveToken2);
        console.log(token2);

 





























































        if (json.user) {
        
   
        saveToken(json.jwt)
      
        saveUser(json.user);

        location.href = "index.html";
        }

        if (json.error) {
            displayMessage("warning", "Invalid login details", ".message-container");
        }

        console.log(json);
    } catch (error) {
        console.log(error);
    }
}



