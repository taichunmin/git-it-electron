//
// Touches the DOM.
// This file listens to events from the language selector and changes the
// DOM to have the language requested.
// Uses globals from chal-header.html.
//

var currentChallenge = document.querySelector('.challenge-item.current');

// Selecting the current locale
var selector = document.getElementById('lang-select');

// add change listener
selector.addEventListener('change', function (event) {
    // Go to page in the locale specified
    var url = '';
    var location = window.location;
    if (currentChallenge) {
        var dir = 'built/' + selector.value + '/challenges';
        url = currentChallenge.href.replace(/built\/(.+)?\/challenges/, dir)
    } else {
        var index = 'built/' + selector.value + '/pages/index.html';
        url = location.href.replace(/built\/(.+)?\/pages\/[\w-]+.html/, index)
    }
    location.href = url;
});