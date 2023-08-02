
 var textInput = $("#input")





$("#submitBtn").on("click", function(e){
    e.preventDefault();


    if (textInput) {
      
      const settings = {
        async: true,
        crossDomain: true,
        url: 'https://low-carb-recipes.p.rapidapi.com/search?name='+textInput.val()+'&limit=6',
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '677e20215dmshf2be8d09b17762ep10a7f9jsn7adbb446e791',
          'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com'
        }
      };
      
      $.ajax(settings).done(function (data) {
       localStorage.setItem("key",JSON.stringify(data));
       var inputDataLocalStorage = JSON.parse(localStorage.getItem("key"));
       inputFunction(inputDataLocalStorage)
       
      });
    } 
})


function inputFunction(inputDataLocalStorage){
  console.log("Cook Time (minutes):" + inputDataLocalStorage[0].cookTime);
  console.log(inputDataLocalStorage[0].image);
  console.log(inputDataLocalStorage[0].name);
  console.log("Prepare Time: " + inputDataLocalStorage[0].prepareTime);
  console.log("Serving: " + inputDataLocalStorage[0].servings);
  console.log("Description:" + inputDataLocalStorage[0].description);
  console.log("Steps: " + inputDataLocalStorage[0].steps);
  console.log("Calories: " + inputDataLocalStorage[0].nutrients.caloriesKCal);

  console.log("ingredients: " + inputDataLocalStorage[0].ingredients[0].name);
  console.log("ingredients Grams: " + inputDataLocalStorage[0].ingredients[0].servingSize.grams);

 
  for (let i = 0; i < inputDataLocalStorage.length; i++) {
    $("#img-" + [i]).attr( "src",inputDataLocalStorage[i].image);
    $("#name-" + [i]).text(inputDataLocalStorage[i].name);
    $("#cookTime-" + [i]).text("Cook Time:" + inputDataLocalStorage[i].cookTime + " min");
    $("#calories-" + [i]).text("Calories: " + inputDataLocalStorage[i].nutrients.caloriesKCal + " kcal");
    $("#servings-" + [i]).text("Serving: " + inputDataLocalStorage[i].servings);
  }
 
}


$("#card-container").click(function(event){
  event.stopPropagation();

  if ($(event.target).attr("id") == "img-0") {
    $("#card-container").addClass("display-hide")
    mainCard0();
  }else if ($(event.target).attr("id") == "img-1") {
    $("#card-container").addClass("display-hide")
    mainCard1();
  }else if ($(event.target).attr("id") == "img-2") {
    $("#card-container").addClass("display-hide")
    mainCard2();
  }else if ($(event.target).attr("id") == "img-3") {
    $("#card-container").addClass("display-hide")
    mainCard3();
  }else if ($(event.target).attr("id") == "img-4") {
    $("#card-container").addClass("display-hide")
    mainCard4();
  }else if ($(event.target).attr("id") == "img-5") {
    $("#card-container").addClass("display-hide")
    mainCard5();
  }

})


function mainCard0() {
  inputDataLocalStorage = JSON.parse(localStorage.getItem("key"));
$("#imgBg-0").attr( "src",inputDataLocalStorage[0].image);
$("#nameBg-0").text(inputDataLocalStorage[0].name);
$("#cookTimeBg-0").text("Cook Time:" + inputDataLocalStorage[0].cookTime + " min");
$("#caloriesBg-0").text("Calories: " + inputDataLocalStorage[0].nutrients.caloriesKCal + " kcal");
$("#servingsBg-0").text("Serving: " + inputDataLocalStorage[0].servings); 
}

function mainCard1() {
  inputDataLocalStorage = JSON.parse(localStorage.getItem("key"));
$("#imgBg-0").attr( "src",inputDataLocalStorage[1].image);
$("#nameBg-0").text(inputDataLocalStorage[1].name);
$("#cookTimeBg-0").text("Cook Time:" + inputDataLocalStorage[1].cookTime + " min");
$("#caloriesBg-0").text("Calories: " + inputDataLocalStorage[1].nutrients.caloriesKCal + " kcal");
$("#servingsBg-0").text("Serving: " + inputDataLocalStorage[1].servings); 
}

function mainCard2() {
  inputDataLocalStorage = JSON.parse(localStorage.getItem("key"));
$("#imgBg-0").attr( "src",inputDataLocalStorage[2].image);
$("#nameBg-0").text(inputDataLocalStorage[2].name);
$("#cookTimeBg-0").text("Cook Time:" + inputDataLocalStorage[2].cookTime + " min");
$("#caloriesBg-0").text("Calories: " + inputDataLocalStorage[2].nutrients.caloriesKCal + " kcal");
$("#servingsBg-0").text("Serving: " + inputDataLocalStorage[2].servings); 
}

function mainCard3() {
  inputDataLocalStorage = JSON.parse(localStorage.getItem("key"));
$("#imgBg-0").attr( "src",inputDataLocalStorage[3].image);
$("#nameBg-0").text(inputDataLocalStorage[3].name);
$("#cookTimeBg-0").text("Cook Time:" + inputDataLocalStorage[3].cookTime + " min");
$("#caloriesBg-0").text("Calories: " + inputDataLocalStorage[3].nutrients.caloriesKCal + " kcal");
$("#servingsBg-0").text("Serving: " + inputDataLocalStorage[3].servings); 
}

function mainCard4() {
  inputDataLocalStorage = JSON.parse(localStorage.getItem("key"));
$("#imgBg-0").attr( "src",inputDataLocalStorage[4].image);
$("#nameBg-0").text("Name: " + inputDataLocalStorage[4].name);
$("#cookTimeBg-0").text("Cook Time:" + inputDataLocalStorage[4].cookTime + " min");
$("#caloriesBg-0").text("Calories: " + inputDataLocalStorage[4].nutrients.caloriesKCal + " kcal");
$("#servingsBg-0").text("Serving: " + inputDataLocalStorage[4].servings); 
}

function mainCard5() {
  inputDataLocalStorage = JSON.parse(localStorage.getItem("key"));
$("#imgBg-0").attr( "src",inputDataLocalStorage[5].image);
$("#nameBg-0").text(inputDataLocalStorage[5].name);
$("#cookTimeBg-0").text("Cook Time:" + inputDataLocalStorage[5].cookTime + " min");
$("#caloriesBg-0").text("Calories: " + inputDataLocalStorage[5].nutrients.caloriesKCal + " kcal");
$("#servingsBg-0").text("Serving: " + inputDataLocalStorage[5].servings); 
}
 


 





   
  


 



























// /*-----------------EDAMAN Api to get Recipes-----------------------------*/
// var searchTerm = document.location.search.split("=")[1]


// $("#formId").on("submit", function(e){
// e.preventDefault();

// document.location.href="./recipes.html?searchTerm=" +$("#search"
// ).val()


// })
// $("#formIdRecipes").on("submit", function (e){
//   e.preventDefault();
//   var text = $("#search").val()
// displayResult(text)
  
// })

// function displayResult(searchTerm){
 
//   var apiEdaman = "https://api.edamam.com/api/recipes/v2?type=public&q= &app_id=13333c96&app_key=8e51eafcc4671e4b6d6838d206ecb0d9%09&imageSize=LARGE";
// apiEdaman = apiEdaman.split(" ");
// textInput = searchTerm

// alert(apiEdaman[0] + textInput + apiEdaman[1]);




//   fetch(apiEdaman[0] + textInput + apiEdaman[1]).then(function(response){
//     if (response.ok) {
//       response.json().then(function(data){
//         localStorage.setItem("key", JSON.stringify(data))
//         var edamanData = JSON.parse(localStorage.getItem("key"))
//         console.log(edamanData);
        
//       })
//     }
//   })


 

// }

// displayResult(searchTerm);










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


