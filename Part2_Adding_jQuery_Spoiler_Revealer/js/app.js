// create the reveal spoiler button
const $button = $('<button>Reveal spoiler</button>');
// append to webpage
$('.spoiler').append($button);

// hide spoiler on page load
$('.spoiler span').hide();

// when button is pressed
$('.spoiler button').click(function() {
    // show spoiler
    $('.spoiler span').show();
    //hide button
    $('.spoiler button').hide();
});

