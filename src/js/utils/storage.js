const tokenKey = "token";
const userKey = "user";

export function saveToken(token) {
    saveToStorage(tokenKey, token);
}







export function getToken() {
    return getFromStorage(tokenKey);
}

export function saveUser(user) {
    saveToStorage(userKey, user);
}

export function getUsername() {
    const user = getFromStorage(userKey);

    if (user) {
        return user.username;
    }

    return null;
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value)); 
}

function getFromStorage(key) {
    const value = localStorage.getItem(key);

    if (!value) {
        return [];
    }

    return JSON.parse(value); /// this parse is currently unnecessary, because our key is already a string
    //they saved the entire user in localstorage, as a big array, so on return/export they needed to convert it with parse for it to be readable, the curly braces and commas, object literals, the language needs parse with all the different symbolss
}

//we must find the source of the saving of the json.user array




//notes
//with this we have a getitem, get the key, we have this getKey that can find our token with JSON.parse