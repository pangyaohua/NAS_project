;(function () {

    document.addEventListener('DOMContentLoaded', function () {

        var html = document.documentElement;

        var windowWidth = html.clientWidth;

        html.style.fontSize = windowWidth / 7.5 + 'px';

        // 等价于html.style.fontSize = windowWidth / 640 * 100 + 'px';

    }, false);

    //setTimeout(function () {
    //    if (window.Android) {
    //        //window.Android.cancelAnim()
    //    }
    //    $('body').show();
    //}, 500)
    
    
/*    (function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
                docEl.style.fontSize = clientWidth / 750;
                //pieces 当然是你在插件中设置的参数了
        };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
*/
})();