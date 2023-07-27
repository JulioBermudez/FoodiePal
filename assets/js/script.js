// Add an event listener to the button to trigger the API request
document.getElementById('mealSearch').addEventListener('click', mealSearch);

// Function to fetch data from the API based on the user's input
function mealSearch() {
  var ingredient = document.getElementById('searchBar').value;
  var apiURL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

  // Fetch data from the API
  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      // Display the data in the results div
      displayData(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      document.getElementById('results').innerHTML = 'Error fetching data';
    });
}

// Function to display the fetched data in the results div
function displayData(data) {
  var resultsDiv = document.getElementById('mealList');
  resultsDiv.innerHTML = ''; // Clear previous results

  // Check if data contains any meals
  if (data.meals) {
    // Loop through the data and display the first five meal names as list items
    for (var i = 0; i < 5 && i < data.meals.length; i++) {
      var meal = data.meals[i];
      var mealName = meal.strMeal;
      var mealLink = document.createElement('a');
      mealLink.textContent = mealName;
      mealLink.href = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`; // Replace with your desired link
      mealLink.className = 'meal-link';

      var listItem = document.createElement('li');
      listItem.appendChild(mealLink);
      resultsDiv.appendChild(listItem);
    }
  } else {
    resultsDiv.innerHTML = 'No meals found for this ingredient.';
  }
}
