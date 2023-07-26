// Add an event listener to the button to trigger the API request
document.getElementById('fetchDataBtn').addEventListener('click', fetchData);

// Function to fetch data from the API based on the user's input
function fetchData() {
  const ingredient = document.getElementById('searchBar').value;
  const apiURL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

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
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = ''; // Clear previous results

  // Check if data contains any meals
  if (data.meals) {
    // Loop through the data and display each meal name as a link
    data.meals.forEach(meal => {
      const mealName = meal.strMeal;
      const mealLink = document.createElement('a');
      mealLink.textContent = mealName;
      mealLink.href = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`; // Replace with your desired link
      mealLink.className = 'meal-link';

      // Append the link to the results div
      resultsDiv.appendChild(mealLink);
    });
  } else {
    resultsDiv.innerHTML = 'No meals found for this ingredient.';
  }
}