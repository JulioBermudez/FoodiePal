
var link = "https://api.edamam.com/api/food-database/v2/parser?app_id=cb1cbbbb&app_key=4b4d86109e98f6fc55854abaa26ada4d&ingr= &nutrition-type=cooking&category=generic-foods"

var ingredient = "eggs"
console.log(link);
function api (){
    fetch(link)
.then(function (response) {
  console.log(response.status);
  //  Conditional for the the response.status.
  if (response.status !== 200) {
    // Place the response.status on the page.
    responseText.textContent = response.status;
  }
  return response.json();
})
.then(function (data) {
 
  console.log(data);
});
}


api()