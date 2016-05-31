define(function (require) {
    var $ = require("jquery");
    $(function () {
        function a(a) {
            var n = 0;
            a.fadeIn(), a.hasClass("pc") ? a.find(".template").addClass("show") : a.hasClass("mobile") && (n = 2, a.find(".template").addClass("show"))
        }

        function n(n) {
            var s = e.find(n.data("target"));
            e.find(r.data("target")).stop().fadeOut(function () {
                a(s)
            }), r.removeClass("active"), n.addClass("active"), r = n
        }

        function s() {
            c = setInterval(function () {
                var a = f.index(r), s = a + 1;
                s > 1 && (s = 0);
                var d = $(f.get(s));
                n(d), r = d
            }, 4e3)
        }

        function d() {
            a(e.find(".pc")), s()
        }

        function i() {
            var a = $(".section2 .animate"), n = a.find(".left"), s = a.find(".right"), d = a.find(".middle"), i = a.find(".icon");
            n.addClass("show"), s.addClass("show"), d.addClass("show"), i.addClass("show")
        }

        function o() {
            var a = $(".section3 .animate");
            a.addClass("show")
        }

        function t() {
            var a = $(".section4 .animate"), n = $(".section4 .circles"), s = n.find(".circle"), d = n.find(".circle-s");
            s.addClass("show"), d.addClass("showCircle"), a.find(".cloud").addClass("play")
        }

        var c, e = $(".section1 .slider"), l = e.find(".dotted"), f = l.find("a"), r = l.find("a.active");
        f.click(function () {
            n($(this)), clearInterval(c), s()
        }), d(), $(window).scroll(function () {
            $(document).scrollTop() >= 760 && $(document).scrollTop() < 1344 ? i() : $(document).scrollTop() >= 1350 && $(document).scrollTop() < 2100 ? o() : $(document).scrollTop() >= 2100 && t()
        })
    })
});