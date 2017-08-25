;(function (doc, win, undefined) {
    var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in win? 'orientationchange' : 'resize',
    recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (clientWidth === undefined) return;
        if(clientWidth < 640 && clientWidth > 320){
        docEl.style.fontSize = 14 * (clientWidth / 320) + 'px';
        }else{
            docEl.style.fontSize = 14 * (640 / 320) + 'px';
        }
    };
    if (doc.addEventListener === undefined) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window);