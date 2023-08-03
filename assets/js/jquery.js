/*-------------API EDAMAN Recipes.html--------------*/
//Gets the api, save it in Local Storage and use that data to print the cards with
//the data of the search. Then if the user selct any card it will see all the details
//of the recipe.
var textInput = $("#inputTxt");
$("#formId").on("submit", function (e) {
  e.preventDefault();

  if ($(textInput)) {
    const settings = {
      async: true,
      crossDomain: true,
      url:
        "https://low-carb-recipes.p.rapidapi.com/search?name=" +
        textInput.val() +
        "&limit=6",
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c9b95150a0mshb1b1801d80cbb2cp125013jsnb0b33675c05a",
        "X-RapidAPI-Host": "low-carb-recipes.p.rapidapi.com",
      },
    };

    $.ajax(settings).done(function (data) {
      localStorage.setItem("key", JSON.stringify(data));
      var inputDataLocalStorage = JSON.parse(localStorage.getItem("key"));
      inputFunction(inputDataLocalStorage);
      $(".hide-container").hide();
      console.log(inputDataLocalStorage);
    });
  }
});
//This function display the results
function inputFunction(inputDataLocalStorage) {
  $("#card-container").show();
  for (let i = 0; i < inputDataLocalStorage.length; i++) {
    $("#img-" + [i]).attr("src", inputDataLocalStorage[i].image);
    $("#name-" + [i]).text(inputDataLocalStorage[i].name);
    $("#cookTime-" + [i]).text("Time: " + inputDataLocalStorage[i].cookTime + " min");
    $("#calories-" + [i]).text("Calories: " + inputDataLocalStorage[i].nutrients.caloriesKCal + " kcal"
    );
    $("#servings-" + [i]).text("Servings:" + inputDataLocalStorage[i].servings);
  }
}
//click action to results will get the selected result Data
//If you click on any picture then will call the function with the data of that
//result
$("#card-container").click(function (event) {
  event.stopPropagation();

  if ($(event.target).attr("id") == "img-0") {
    $("#card-container").hide();
    mainCard0();
  } else if ($(event.target).attr("id") == "img-1") {
    $("#card-container").hide();
    mainCard1();
  } else if ($(event.target).attr("id") == "img-2") {
    $("#card-container").hide();
    mainCard2();
  } else if ($(event.target).attr("id") == "img-3") {
    $("#card-container").hide();
    mainCard3();
  } else if ($(event.target).attr("id") == "img-4") {
    $("#card-container").hide();
    mainCard4();
  } else if ($(event.target).attr("id") == "img-5") {
    $("#card-container").hide();
    mainCard5();
  }
});
//If the user click on one of the result this will display that result with more details

//Main Card Result Card 1
function mainCard0() {
  $("#main-card-container").show();
  inputDataLocalStorage = JSON.parse(localStorage.getItem("key"));
  $("#imgBg-0").attr("src", inputDataLocalStorage[0].image);
  $("#nameBg-0").text(inputDataLocalStorage[0].name);
  $("#cookTimeBg-0").text(inputDataLocalStorage[0].cookTime + " min");
  $("#caloriesBg-0").text(inputDataLocalStorage[0].nutrients.caloriesKCal + " kcal"
  );
  $("#servingsBg-0").text(inputDataLocalStorage[0].servings);
  $("#description").text(inputDataLocalStorage[0].description);

  var ingredientsPath = inputDataLocalStorage[0].ingredients;
  for (let index = 0; index < ingredientsPath.length; index++) {
    $(
      "<li>" +
        inputDataLocalStorage[0].ingredients[index].name +
        ": " +
        inputDataLocalStorage[0].ingredients[index].servingSize.grams +
        " g</li>"
    ).appendTo("#ingredientsList");
  }

  var stepsPath = inputDataLocalStorage[0].steps;
  for (let i = 0; i < stepsPath.length; i++) {
    $("<li>" + inputDataLocalStorage[0].steps[i] + "</li>").appendTo("#steps");
  }
}


//Main Card Result Card 2
function mainCard1() {
  $("#main-card-container").show();
  inputDataLocalStorage = JSON.parse(localStorage.getItem("key"));
  $("#imgBg-0").attr("src", inputDataLocalStorage[1].image);
  $("#nameBg-0").text(inputDataLocalStorage[1].name);
  $("#cookTimeBg-0").text(inputDataLocalStorage[1].cookTime + " min");
  $("#caloriesBg-0").text(
    inputDataLocalStorage[1].nutrients.caloriesKCal + " kcal"
  );
  $("#servingsBg-0").text(inputDataLocalStorage[1].servings);
  $("#description").text(inputDataLocalStorage[1].description);

  var ingredientsPath = inputDataLocalStorage[1].ingredients;
  for (let index = 0; index < ingredientsPath.length; index++) {
    $(
      "<li>" +
        inputDataLocalStorage[1].ingredients[index].name +
        ": " +
        inputDataLocalStorage[1].ingredients[index].servingSize.grams +
        " g</li>"
    ).appendTo("#ingredientsList");
  }

  var stepsPath = inputDataLocalStorage[1].steps;
  for (let i = 0; i < stepsPath.length; i++) {
    $("<li>" + inputDataLocalStorage[1].steps[i] + "</li>").appendTo("#steps");
  }
}
//Main Card Result Card 3
function mainCard2() {
  $("#main-card-container").show();
  inputDataLocalStorage = JSON.parse(localStorage.getItem("key"));
  $("#imgBg-0").attr("src", inputDataLocalStorage[2].image);
  $("#nameBg-0").text(inputDataLocalStorage[2].name);
  $("#cookTimeBg-0").text(inputDataLocalStorage[2].cookTime + " min");
  $("#caloriesBg-0").text(inputDataLocalStorage[2].nutrients.caloriesKCal + " kcal"
  );
  $("#servingsBg-0").text(inputDataLocalStorage[2].servings);
  $("#description").text(inputDataLocalStorage[2].description);

  var ingredientsPath = inputDataLocalStorage[2].ingredients;
  for (let index = 0; index < ingredientsPath.length; index++) {
    $(
      "<li>" +
        inputDataLocalStorage[2].ingredients[index].name +
        ": " +
        inputDataLocalStorage[2].ingredients[index].servingSize.grams +
        " g</li>"
    ).appendTo("#ingredientsList");
  }

  var stepsPath = inputDataLocalStorage[2].steps;
  for (let i = 0; i < stepsPath.length; i++) {
    $("<li>" + inputDataLocalStorage[2].steps[i] + "</li>").appendTo("#steps");
  }
}
//Main Card Result Card 4
function mainCard3() {
  $("#main-card-container").show();
  inputDataLocalStorage = JSON.parse(localStorage.getItem("key"));
  $("#imgBg-0").attr("src", inputDataLocalStorage[3].image);
  $("#nameBg-0").text(inputDataLocalStorage[3].name);
  $("#cookTimeBg-0").text(inputDataLocalStorage[3].cookTime + " min");
  $("#caloriesBg-0").text(
    inputDataLocalStorage[3].nutrients.caloriesKCal + " kcal"
  );
  $("#servingsBg-0").text(inputDataLocalStorage[3].servings);
  $("#description").text(inputDataLocalStorage[3].description);

  var ingredientsPath = inputDataLocalStorage[3].ingredients;
  for (let index = 0; index < ingredientsPath.length; index++) {
    $(
      "<li>" +
        inputDataLocalStorage[3].ingredients[index].name +
        ": " +
        inputDataLocalStorage[3].ingredients[index].servingSize.grams +
        " g</li>"
    ).appendTo("#ingredientsList");
  }

  var stepsPath = inputDataLocalStorage[3].steps;
  for (let i = 0; i < stepsPath.length; i++) {
    $("<li>" + inputDataLocalStorage[3].steps[i] + "</li>").appendTo("#steps");
  }
}
//Main Card Result Card 5
function mainCard4() {
  $("#main-card-container").show();
  inputDataLocalStorage = JSON.parse(localStorage.getItem("key"));
  $("#imgBg-0").attr("src", inputDataLocalStorage[4].image);
  $("#nameBg-0").text("Name: " + inputDataLocalStorage[4].name);
  $("#cookTimeBg-0").text(inputDataLocalStorage[4].cookTime + " min");
  $("#caloriesBg-0").text(
    inputDataLocalStorage[4].nutrients.caloriesKCal + " kcal"
  );
  $("#servingsBg-0").text(inputDataLocalStorage[4].servings);
  $("#description").text(inputDataLocalStorage[4].description);

  var ingredientsPath = inputDataLocalStorage[4].ingredients;
  for (let index = 0; index < ingredientsPath.length; index++) {
    $(
      "<li>" +
        inputDataLocalStorage[4].ingredients[index].name +
        ": " +
        inputDataLocalStorage[4].ingredients[index].servingSize.grams +
        " g</li>"
    ).appendTo("#ingredientsList");
  }

  var stepsPath = inputDataLocalStorage[4].steps;
  for (let i = 0; i < stepsPath.length; i++) {
    $("<li>" + inputDataLocalStorage[4].steps[i] + "</li>").appendTo("#steps");
  }
}
//Main Card Result Card 6
function mainCard5() {
  $("#main-card-container").show();
  inputDataLocalStorage = JSON.parse(localStorage.getItem("key"));
  $("#imgBg-0").attr("src", inputDataLocalStorage[5].image);
  $("#nameBg-0").text(inputDataLocalStorage[5].name);
  $("#cookTimeBg-0").text(inputDataLocalStorage[5].cookTime + " min");
  $("#caloriesBg-0").text(
    inputDataLocalStorage[5].nutrients.caloriesKCal + " kcal"
  );
  $("#servingsBg-0").text(inputDataLocalStorage[5].servings);
  $("#description").text(inputDataLocalStorage[5].description);

  var ingredientsPath = inputDataLocalStorage[5].ingredients;
  for (let index = 0; index < ingredientsPath.length; index++) {
    $(
      "<li>" +
        inputDataLocalStorage[5].ingredients[index].name +
        ": " +
        inputDataLocalStorage[5].ingredients[index].servingSize.grams +
        " g</li>"
    ).appendTo("#ingredientsList");
  }

  var stepsPath = inputDataLocalStorage[5].steps;
  for (let i = 0; i < stepsPath.length; i++) {
    $("<li>" + inputDataLocalStorage[5].steps[i] + "</li>").appendTo("#steps");
  }
}
/*--------------------------------------------------------------------------------------*/

/*----------------Get The Api For Carousell----------------*/
/*
var apiEdaman =
  "https://api.edamam.com/api/recipes/v2?type=public&q=salad&app_id=13333c96&app_key=8e51eafcc4671e4b6d6838d206ecb0d9%09&imageSize=LARGE";
$(function () {
  fetch(apiEdaman).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        localStorage.setItem("key", JSON.stringify(data));
        var edamanData = JSON.parse(localStorage.getItem("key"));
        console.log(edamanData);
        sliderFunction(edamanData);
      });
    }
  });
});

/*---------------Slider Configuration-----------------*/
/*
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".slider");
  M.Slider.init(elems, { duration: 600, height: 400 });
});

function sliderFunction(edamanData) {
  var randomHits1 = parseInt(Math.random() * 20);
  var randomHits2 = parseInt(Math.random() * 20);
  var randomHits3 = parseInt(Math.random() * 20);
  var randomHits4 = parseInt(Math.random() * 20);

  //Img 1
  $("#sliderImg1El").attr("src", edamanData.hits[randomHits1].recipe.image);
  $("#calImg1El").text(
    parseInt(edamanData.hits[randomHits1].recipe.calories) + " cal"
  );
  //Img 2
  $("#sliderImg2El").attr("src", edamanData.hits[randomHits2].recipe.image);
  $("#calImg2El").text(
    parseInt(edamanData.hits[randomHits2].recipe.calories) + " cal"
  );

  //Img 3
  $("#sliderImg3El").attr("src", edamanData.hits[randomHits3].recipe.image);
  $("#calImg3El").text(
    parseInt(edamanData.hits[randomHits3].recipe.calories) + " cal"
  );

  //Img 4
  $("#sliderImg4El").attr("src", edamanData.hits[randomHits4].recipe.image);
  $("#calImg4El").text(
    parseInt(edamanData.hits[randomHits4].recipe.calories) + " cal"
  );
}

/*----------------------Parallax-----------------------*/

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".parallax");
  M.Parallax.init(elems, 0);
});
