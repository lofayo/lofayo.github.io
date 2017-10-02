$(function() {
    // 文章预览时，每篇文章的标题

    $('.recent-post-item').each(function() {
        var title = $(this).find('.recent-post-link').attr('href').replace(/\//g, '');

        $(this).find('.post-excerpt').children().html(title);
    })

    // 进入一篇文章详读时，文章标题

    $('.article_title').each(function() {
        $(this).html(title);
    })
})();
