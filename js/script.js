$(document).ready(function() {
    $('.style-li').on('click', function(e) {
        var image = $(this).find('img');
        var image_url = image.attr('src');
        $('#slide>img').attr('src', image_url);
        e.stopPropagation();
        e.preventDefault();
    });
})