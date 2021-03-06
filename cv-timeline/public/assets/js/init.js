/*! viewportSize | Author: Tyson Matanich, 2013 | License: MIT */
(function(n) {
    n.viewportSize = {}, n.viewportSize.getHeight = function() {
        return t("Height")
    }, n.viewportSize.getWidth = function() {
        return t("Width")
    };
    var t = function(t) {
        var f, o = t.toLowerCase(), e = n.document, i = e.documentElement, r, u;
        return n["inner" + t] === undefined ? f = i["client" + t] : n["inner" + t] != i["client" + t] ? (r = e.createElement("body"), r.id = "vpw-test-b", r.style.cssText = "overflow:scroll", u = e.createElement("div"), u.id = "vpw-test-d", u.style.cssText = "position:absolute;top:-1000px", u.innerHTML = "<style>@media(" + o + ":" + i["client" + t] + "px){body#vpw-test-b div#vpw-test-d{" + o + ":7px!important}}<\/style>", r.appendChild(u), i.insertBefore(r, e.head), f = u["offset" + t] == 7 ? i["client" + t] : n["inner" + t], i.removeChild(r)) : f = n["inner" + t], f
    }
})(this);

/**
 * How to create a parallax scrolling website
 * Author: Petr Tichy
 * URL: www.ihatetomatoes.net
 * Article URL: http://ihatetomatoes.net/how-to-create-a-parallax-scrolling-website/
 */

(function($) {
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        // Setup variables
        $window = $(window);
        $body = $('body');

        //FadeIn all sections   
        $body.imagesLoaded(function() {
            setTimeout(function() {
                adjustWindow();
                $body.removeClass('loading').addClass('loaded');

            }, 800);
        });

        function adjustWindow() {
            var s = skrollr.init({
                forceHeight: false
            });
        }
    }

})(jQuery);