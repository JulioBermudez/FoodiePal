/*-----------------EDAMAN Api to get Recipes-----------------------------*/
var searchTerm = document.location.search.split("=")[1]


$("#formId").on("submit", function(e){
e.preventDefault();

document.location.href="./recipes.html?searchTerm=" +$("#search"
).val()


})
$("#formIdRecipes").on("submit", function (e){
  e.preventDefault();
  var text = $("#search").val()
displayResult(text)
  
})

function displayResult(searchTerm){
 
  var apiEdaman = "https://api.edamam.com/api/recipes/v2?type=public&q= &app_id=13333c96&app_key=8e51eafcc4671e4b6d6838d206ecb0d9%09&imageSize=LARGE";
apiEdaman = apiEdaman.split(" ");
textInput = searchTerm

alert(apiEdaman[0] + textInput + apiEdaman[1]);




  fetch(apiEdaman[0] + textInput + apiEdaman[1]).then(function(response){
    if (response.ok) {
      response.json().then(function(data){
        localStorage.setItem("key", JSON.stringify(data))
        var edamanData = JSON.parse(localStorage.getItem("key"))
        console.log(edamanData);
        
      })
    }
  })


 

}

displayResult(searchTerm);
/*
var apiEdaman = "https://api.edamam.com/api/recipes/v2?type=public&q= &app_id=13333c96&app_key=8e51eafcc4671e4b6d6838d206ecb0d9%09&imageSize=LARGE";
apiEdaman = apiEdaman.split(" ");
textInput = $("#search").val()

console.log(textInput);

$(function(){


  fetch(apiEdaman[0] + textInput + apiEdaman[1]).then(function(response){
    if (response.ok) {
      response.json().then(function(data){
        localStorage.setItem("key", JSON.stringify(data))
        var edamanData = JSON.parse(localStorage.getItem("key"))
        console.log(edamanData);
        
      })
    }
  })


 
})


/*------------------Api from Ninjas.com (Nutrition)------------------------*/
/*
var query = '1lb brisket and fries'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/nutrition?query=' + query,
    headers: { 'X-Api-Key': 'XF9XtAse9elHuuwIPDkaRw==hIvovhlZsqksVbMr'},
    contentType: 'application/json',
    success: function(result) {
        localStorage.setItem("nutrition" , JSON.stringify(result))
        var nutritionData = JSON.parse(localStorage.getItem("nutrition"))
        console.log(nutritionData);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
console.log("XF9XtAse9elHuuwIPDkaRw==hIvovhlZsqksVbMr");


/*----------------Get The Api For Carousell----------------*/
/*
var apiEdaman = "https://api.edamam.com/api/recipes/v2?type=public&q=salad&app_id=13333c96&app_key=8e51eafcc4671e4b6d6838d206ecb0d9%09&imageSize=LARGE";
$(function(){
  fetch(apiEdaman).then(function(response){
    if (response.ok) {
      response.json().then(function(data){
        localStorage.setItem("key", JSON.stringify(data))
        var edamanData = JSON.parse(localStorage.getItem("key"))
        console.log(edamanData);
        sliderFunction(edamanData);
      })
    }
  })
})

/*---------------Slider Configuration-----------------*/
/*
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.slider');
  M.Slider.init(elems,{duration: 600, height:400});
 
});

function sliderFunction(edamanData){
  var randomHits1 = parseInt(Math.random() * 20);
  var randomHits2 = parseInt(Math.random() * 20);
  var randomHits3 = parseInt(Math.random() * 20);
  var randomHits4 = parseInt(Math.random() * 20);

  //Img 1
  $("#sliderImg1El").attr("src", edamanData.hits[randomHits1].recipe.image);
  $("#calImg1El").text(parseInt(edamanData.hits[randomHits1].recipe.calories) + " cal");
  //Img 2
  $("#sliderImg2El").attr("src", edamanData.hits[randomHits2].recipe.image);
  $("#calImg2El").text(parseInt(edamanData.hits[randomHits2].recipe.calories) + " cal");

  //Img 3
  $("#sliderImg3El").attr("src", edamanData.hits[randomHits3].recipe.image);
  $("#calImg3El").text(parseInt(edamanData.hits[randomHits3].recipe.calories) + " cal");

  //Img 4
  $("#sliderImg4El").attr("src", edamanData.hits[randomHits4].recipe.image);
  $("#calImg4El").text(parseInt(edamanData.hits[randomHits4].recipe.calories) + " cal");

}

/*----------------------Parallax-----------------------*/

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  M.Parallax.init(elems, 0);
});


