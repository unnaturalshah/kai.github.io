/*script.js*/
document.addEventListener('DOMContentLoaded', function() {


//Get the color picker element
const colorPicker = document.getElementById('color-picker');
const body = document.body;

// Get the submit button element
var submitBtn = document.getElementById('submit-btn');


colorPicker.addEventListener('change', () => {
  body.style.backgroundColor = colorPicker.value;
});

// Check if the selected option is stored in localStorage
  const selectedOption = localStorage.getItem('selectedOption');
  const lastActionTimestamp = localStorage.getItem('lastActionTimestamp');
  if (selectedOption) {
    document.getElementById('option-select').value = selectedOption;
  }
  if (lastActionTimestamp) {
    document.getElementById('last-action').textContent = `Last action: ${lastActionTimestamp}`;
  }
  
// Check if a color preference exists in localStorage
if (localStorage.getItem('colorPreference')) {
  // Retrieve the color preference from localStorage
  var storedColor = localStorage.getItem('colorPreference');
  
  // Set the color picker value to the stored color preference
  colorPicker.value = storedColor;
}

// Add an event listener to the submit button
submitBtn.addEventListener('click', function() {
  // Get the selected color
  var color = colorPicker.value;
  // Get the selected option
    const selectedOption = document.getElementById('option-select').value;
  // Store the color preference in localStorage
  localStorage.setItem('colorPreference', color);
  // Store the selected option in localStorage
    localStorage.setItem('selectedOption', selectedOption);
 
 // Get the current date and time
    const now = new Date();
    const lastActionTimestamp = now.toLocaleString();

    // Store the last action timestamp in localStorage
    localStorage.setItem('lastActionTimestamp', lastActionTimestamp);

    // Update the last action display
    document.getElementById('last-action').textContent = `Last action: ${lastActionTimestamp}`;	
	
// For example, display a confirmation message
//    alert(`Option selected: ${selectedOption}\nLast action: ${lastActionTimestamp}`);
});

 
});
