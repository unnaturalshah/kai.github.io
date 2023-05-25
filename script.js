/*script.js*/


document.addEventListener('DOMContentLoaded', function() {

//Color
var colorInput = document.getElementById('color-input');
var colorPreview = document.getElementById('color-preview');

// Update color preview based on selected color
  function updateColorPreview() {
    var selectedColor = colorInput.value;
    document.body.style.backgroundColor = selectedColor;
    colorPreview.style.backgroundColor = selectedColor;
  }

// Event listener for color input
 // colorInput.addEventListener('change', function() {
 //   var selectedColor = colorInput.value;
 //   document.body.style.backgroundColor = selectedColor;
 //   colorPreview.style.backgroundColor = selectedColor;
 // });	

  // Check if color preference is stored in localStorage
  var storedColor = localStorage.getItem('colorPreference');
  if (storedColor) {
    colorInput.value = storedColor;
    updateColorPreview();
  }

  // Event listener for color input
  colorInput.addEventListener('input', function() {
    updateColorPreview();

    // Store selected color in localStorage
    var selectedColor = colorInput.value;
    localStorage.setItem('colorPreference', selectedColor);
  });


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

  for (var langCode in languages) {
    if (languages.hasOwnProperty(langCode)) {
      var option = document.createElement('option');
      option.value = langCode;
      option.textContent = languages[langCode];
      languageSelect.appendChild(option);
    }
  }

  languageSelect.addEventListener('change', function() {
    var selectedLanguage = languageSelect.value;
    languageText.textContent = languages[selectedLanguage];
  });

  var storedLanguage = localStorage.getItem('languagePreference');
  if (storedLanguage && languages.hasOwnProperty(storedLanguage)) {
    languageSelect.value = storedLanguage;
    languageText.textContent = languages[storedLanguage];
  }


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

