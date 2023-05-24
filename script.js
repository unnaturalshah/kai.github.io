/* script.js */
document.addEventListener('DOMContentLoaded', function() {
  var languageText = document.getElementById('language-text');
  var languageSelect = document.getElementById('language-select');

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
});
