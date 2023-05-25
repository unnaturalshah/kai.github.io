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

// Add an event listener to the submit button
submitBtn.addEventListener('click', function() {
  // Get the selected color
  var color = colorPicker.value;
  
  // Store the color preference in localStorage
  localStorage.setItem('colorPreference', color);
});

// Check if a color preference exists in localStorage
if (localStorage.getItem('colorPreference')) {
  // Retrieve the color preference from localStorage
  var storedColor = localStorage.getItem('colorPreference');
  
  // Set the color picker value to the stored color preference
  colorPicker.value = storedColor;
}


  //initializing languages
  var languages = {
    'en': 'English',
    'es': 'Spanish',
    'fr': 'French',
    'de': 'German',
    'gu': 'Gujarati',
    'hi': 'Hindi',
    'it': 'Italian',
    'ja': 'Japanese',
    'ko': 'Korean',
    'pt': 'Portuguese',
    'ru': 'Russian',
    'zh': 'Chinese',
    // Add more language codes and names as needed
  };

  var languageSelect = document.getElementById('language-select');
  var languageText = document.getElementById('language-text');

  // Update language text based on stored or selected language
  updateLanguageText();

  // Event listener for language select
  languageSelect.addEventListener('change', function() {
    var selectedLanguage = languageSelect.value;
    localStorage.setItem('languagePreference', selectedLanguage);
    updateLanguageText();
  });

  function updateLanguageText() {
    var selectedLanguage = languageSelect.value;
    var translations = {
      en: 'Default language text',
      fr: 'Texte par défaut',
      es: 'Texto predeterminado'
      // Add more translations for each language as needed
    };

    // Check if translation exists in the translations object
    if (translations[selectedLanguage]) {
      languageText.textContent = translations[selectedLanguage];
    } else {
      // If translation is not available, use the default text
      languageText.textContent = translations['en'];
    }

    // Translate text if the selected language is not English
    if (selectedLanguage !== 'en') {
      translateText(languageText.textContent, selectedLanguage, function(translation) {
        languageText.textContent = translation;
      });
    }
  }

  function translateText(text, targetLanguage, callback) {
    var apiKey = 'YOUR_API_KEY'; // Replace with your Microsoft Translator Text API key

    Microsoft.Translator.translate({
      text: text,
      to: targetLanguage,
      api_key: apiKey
    }, function(result) {
      if (result && result.translation) {
        callback(result.translation);
      } else {
        console.error('Translation error:', result);
        callback(text);
      }
    });
  }
});
