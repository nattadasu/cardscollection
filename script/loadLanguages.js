// Add definitions
var arrLang = {
    "en-US": {
    },
    "id-ID": {
    }
};

// Function for translation
$(document).ready(function () {
    var lang = "en-US";
    $(".lang").each(function (index, element) {
        $(this).text(arrLang[lang][$(this).attr("key")]);
    });
});

// get/set the selected language
$(".translate").click(function () {
    var lang = $(this).attr("id");

    $(".lang").each(function (index, element) {
        $(this).text(arrLang[lang][$(this).attr("key")]);
    });
});

// save, in your .translate click handler
localStorage.setItem('lang', $(this).attr('id'));

// Load on DOMContentLoaded
var lang = localStorage.getItem('lang') || navigator.language.slice(0, 2);
if (!Object.keys(arrLang).includes(lang)) lang = 'en-US';