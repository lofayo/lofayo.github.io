$(function() {
    $('.recent-post-item').each(function() {
        var title = $(this).find('.recent-post-link').attr('href').replace(/\//g, '');
        $(this).find('.post-excerpt').children().html(title);
    })
})()
