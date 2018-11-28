const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');
const $pdfCheckbox = $("<label><input type='checkbox'> Allow PDF downloads</label>");

// Open secure links in new tab with _blank, just like html
$secureLinks.attr('target', '_blank');
$pdfs.attr('target', 'download');

// Changing CSS elements and classes

// Unsure if I like the stripes
//$odd.css('backgroundColor', 'lightgrey');

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

// Disable PDF download if box unchecked
$pdfs.on('click', function(event) {
    if ($(':checked').length === 0) {
    event.preventDefault();
    alert('Please check the box to allow PDF downloads');
    }
});

$('#links').append($pdfCheckbox);

$('a').each(function() {
    const url = $(this).attr('href');
    $(this).parent().append(`(${url})`);
});