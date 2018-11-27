/*

//$('#flashMessage').hide();
//$('#flashMessage').slideDown(1000);
//$('#flashMessage').delay(3000);
//$('#flashMessage').slideUp();

const title = "My first blog post";
const content = "This is my <strong>first</strong> post";

$('#blogTitlePreview').text(title);
$('#blogContentPreview').html(content);
*/

$('#flashMessage').hide();

$('#previewButton').click(function(){
    const title = $('#blogTitleInput').val();
    const content = $('#blogContentInput').val();
    
    $('#blogTitlePreview').text(title);
    $('#blogContentPreview').html(content);

    $('#flashMessage')
        .slideDown(1000)
        .delay(3000)
        .slideUp();
    
    });