// Add definitions
var arrLang = {
    "en-US": {
        "siteTitle": "Natsu's Cards Collection",
        "subtitle": "Because he's lazy to create another site and/or updating both on MAL and GitHub, so he decided to make one integrated site lmao.\nBtw this site is optimized only for phone, desktop user would see the card blurred because automated resizing.",
        "paraOne": "To be honest, creating a dedicated site from scratch with HTML isn't that easy as people imagined. But if you got a hobby to write codes, welp, I can't judge you. 🗿",
        "paraTwo": "For make things easier, I'm using <i class=\"fab fa-github-alt\"></i> GitHub Pages for deploying this site, <i class=\"fab fa-font-awesome-flag\"></i> Font Awesome for embedding icons, <i class=\"fab fa-js-square\"></i> jQuery for JavaScript library, <i class=\"fas fa-icons\"></i> Favicons.io for instant favicon (although I'm using stock emoji lmao), <i class=\"fab fa-css3\"></i> W3.CSS for CSS framework (so I won't have any headache while designing the site lol), and <i class=\"fas fa-redo-alt\"></i> Lozad.js for lazy load.",
        "paraThree": "Also, if you look at the <a href=\"https://raw.githubusercontent.com/nattadasu/cardscollection/master/index.html\">source code of this site</a>, you will found that somehow, I can manage over ~398 cards bruh. Big thanks to <a href=\"clubID.toml\">clubs index</a> (in <i class=\"fas fa-cog\"></i> TOML) and <a href=\"editionDetail.json\">card editions index</a> (in <i class=\"fab fa-js-square\"></i> JSON) I've made to assist me on placing the cards in their place.",
        "funfact": "Fun fact: there's a schema file for edition index JSON. try to look it at <a href=\"editionDetail.schema.json\">editionDetail.schema.json</a>.",
        "selector": "Select Language",
        "english": "English",
        "indonesian": "Indonesian",
        "malay": "Malay",
        "japanese": "Japanese",
        "darkMode": "Dark Mode (Experimental)",
        "toc": "Table of Content",
        "footerText": "This site is powered by GitHub, W3.CSS, jQuery, Lozad.js, Font Awesome, and Favicons.io.",
        "madeIn": "Made in Indonesia with ❤.",
        "authorName": "Natsu Tadama",
        "github": "See this site repository on"
    },
    "id-ID": {
        //Metadata
        "siteTitle": "Koleksi Kartu Natsu",
        "subtitle": "Gegara si Natsu bawaannya mager pas mau update koleksinya di blog MAL dia sekalian di GitHub, akhirnya kepikiran uga untuk bikin satu laman khusus.\nBtw, web ini ga terlalu optimal buat siapapun kekw. Mau pake PC salah, hape pun gitu uga.",
        "paraOne": "To be honest, creating a dedicated site from scratch with HTML isn't that easy as people imagined. But if you got a hobby to write codes, welp, I can't judge you. 🗿",
        "paraTwo": "For make things easier, I'm using <i class=\"fab fa-github-alt\"></i> GitHub Pages for deploying this site, <i class=\"fab fa-font-awesome-flag\"></i> Font Awesome for embedding icons, <i class=\"fab fa-js-square\"></i> jQuery for JavaScript library, <i class=\"fas fa-icons\"></i> Favicons.io for instant favicon (although I'm using stock emoji lmao), <i class=\"fab fa-css3\"></i> W3.CSS for CSS framework (so I won't have any headache while designing the site lol), and <i class=\"fas fa-redo-alt\"></i> Lozad.js for lazy load.",
        "paraThree": "Also, if you look at the <a href=\"https://raw.githubusercontent.com/nattadasu/cardscollection/master/index.html\">source code of this site</a>, you will found that somehow, I can manage over ~398 cards bruh. Big thanks to <a href=\"clubID.toml\">clubs index</a> (in <i class=\"fas fa-cog\"></i> TOML) and <a href=\"editionDetail.json\">card editions index</a> (in <i class=\"fab fa-js-square\"></i> JSON) I've made to assist me on placing the cards in their place.",
        "funfact": "Fun fact: there's a schema file for edition index JSON. try to look it at <a href=\"editionDetail.schema.json\">editionDetail.schema.json</a>.",
        "selector": "Select Language",
        "english": "English",
        "indonesian": "Indonesian",
        "malay": "Malay",
        "japanese": "Japanese",
        "darkMode": "Dark Mode (Experimental)",
        "toc": "Table of Content",
        "footerText": "This site is powered by GitHub, W3.CSS, jQuery, Lozad.js, Font Awesome, and Favicons.io.",
        "madeIn": "Made in Indonesia with ❤.",
        "authorName": "Natsu Tadama",
        "github": "See this site repository on"
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