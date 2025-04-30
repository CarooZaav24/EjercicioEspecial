let LoadProducts = document.getElementById("btnLoadProducts");
const urlMain = "https://api.escuelajs.co/api/v1/products";
let card = document.getElementsByClassName("col"); 

function getCategories(){
    const options= {"method":"GET"}; 
    fetch(urlMain+"categories/", options)
        .then((response) => {
            // console.log(response);
            response.json().then((res) => {
              ;
        })
        .catch((err) => {
            main.insertAdjacentHTML("beforeend",
                `<div class="alert alert-danger" role="alert">
            ${err.message}
        </div>`);
        });
  }