/*script.js*/
document.addEventListener('DOMContentLoaded', function() {
  var languageText = document.getElementById('language-text');
  var languageSelect = document.getElementById('language-select');
  var colorInput = document.getElementById('color-input');
  var colorPreview = document.getElementById('color-preview');

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
  
 
  for (var langCode in languages) {
    var option = document.createElement('option');
    option.value = langCode;
    option.textContent = languages[langCode];
    languageSelect.appendChild(option);
  }

  languageSelect.addEventListener('change', function() {
    var selectedLanguage = languageSelect.value;
    languageText.textContent = languages[selectedLanguage];
  });
  
  
  // Check if language preference is stored in localStorage
  var storedLanguage = localStorage.getItem('languagePreference');
  if (storedLanguage) {
    languageSelect.value = storedLanguage;
  }
  

  // Update language text based on stored or selected language
  updateLanguageText();

  // Event listener for language select
  languageSelect.addEventListener('change', function() {
    var selectedLanguage = languageSelect.value;
    localStorage.setItem('languagePreference', selectedLanguage);
    updateLanguageText();
  });

  // Event listener for color input
  colorInput.addEventListener('change', function() {
    var selectedColor = colorInput.value;
    document.body.style.backgroundColor = selectedColor;
    colorPreview.style.backgroundColor = selectedColor;
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
