$(document).ready(function() {
    if ($(window).width() <= 768) {
        $('#video-embed').attr('width', $(window).width());
        $('#video-embed').attr('height', $(window).width() * 3 / 4);
        $('#video-embed').css('width', $(window).width() + 'px');
        $('#video-embed').css('height', $(window).width() * 3 / 4 + 'px');
    }
    //
});
$(window).resize(function() {
    if ($(window).width() <= 768) {
        $('#video-embed').attr('width', $(window).width());
        $('#video-embed').attr('height', $(window).width() * 3 / 4);
        $('#video-embed').css('width', $(window).width() + 'px');
        $('#video-embed').css('height', $(window).width() * 3 / 4 + 'px');
    }
});