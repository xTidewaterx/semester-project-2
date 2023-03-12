import { baseUrl } from "../../settings/api.js";
import { getToken } from "../../utils/storage.js";

export async function deleteButton() {

    const id = 4;
    const editId = localStorage.getItem("editId");
  
  
    confirm ("Click yes to confirm ID")
  if(confirm) { 
  
    
   // confirm("Do you want to delete the product with the id" + ${id});
  
   // if(confirm) {}
  
         const url = baseUrl + "/products/" + editId;
         console.log(url);
  
             // const url = "https://strapi-sp2-noroff.herokuapp.com/products/4"
  
            //  const token = getToken();
  
              const token1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjYzMjUwNDY1LCJleHAiOjE2NjU4NDI0NjV9.n46m8kL9pCny2fM4bTLII5uGW0pVIBy3LXg0-3WLsKU";
              
              const token = getToken();  //new import
            
              if(confirm) {
            
              const options = {
                  method: "DELETE",
                  headers: {
                      Authorization: `Bearer ${token}`,
                  } }
  
              try {
                  const response = await fetch(url, options);
                  const json = await response.json();
  
                 // location.href = "/";
  
                  console.log(json);
              } catch (error) {
                  console.log(error);
              }} }
          }
      
  //Delete function STOP
  