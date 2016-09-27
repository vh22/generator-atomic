module.exports = {
    scrollToTop: function () {
        const body = document.getElementsByTagName('body');
        const btnScrollTop = document.querySelectorAll('[data-scroll-to-top]');
        if (btnScrollTop.length) {
            $(btnScrollTop).on('click', function () {
                console.log('dasdas');
                const body = $('body');
                let offsetTop = body.scrollTop();
                if (offsetTop !== 0) {
                    body.animate({scrollTop: 0}, '250');
                }
            });
        }
    }
};