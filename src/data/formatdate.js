export function formatDate(dateString, lang) {
    const date = new Date(dateString);
  
    const locales = {
      ar: "ar-EG",
      fr: "fr-FR",
      en: "en-US",
    };
  
    return date.toLocaleDateString(locales[lang], {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }