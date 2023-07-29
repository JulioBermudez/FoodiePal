/*----------------Get The Api For Tips----------------*/
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
  M.Slider.init(elems,{duration: 900, height:400});
 
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

/*---------------------------------------------------*/

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, 0);
});

