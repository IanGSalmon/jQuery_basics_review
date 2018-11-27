// create the reveal spoiler button
const $button = $('<button>Reveal spoiler</button>');
// append to webpage
$('.spoiler').append($button);

// hide spoiler on page load
$('.spoiler span').hide();

// when button is pressed
$('.spoiler').on('click', 'button', function(event) {
    // show spoiler
    $(this).prev().show();
    //hide button
    $(this).hide();
});
