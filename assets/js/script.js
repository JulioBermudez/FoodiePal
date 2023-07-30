
//to load whole DOM first
document.addEventListener("DOMContentLoaded", function () {
    
//getting search word
    var searchInput = document.getElementById("search");
    var storedSearchTerm = localStorage.getItem('searchTerm');
    if (storedSearchTerm) {
      searchInput.value = storedSearchTerm;
    }

//add event listener
  searchInput.closest("form").addEventListener("submit", function (event) {
    event.preventDefault();

//get the value from the search
    var searchTerm = searchInput.value;

//keep values on local storage
localStorage.setItem('searchTerm', searchTerm);

//redirect search to second page
window.location.href = 'secondPage.html'
  });
});
