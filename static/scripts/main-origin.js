(function () {
    function Router() {} //Router构造函数
    Router.prototype.route = function (path, callback) {
        var url = location.hash.slice(1) || '/';
        // 刷新时的处理 
        window.addEventListener('load', function () {
            if (url == path) {
                $('.wrapper').removeClass('active500').addClass('active0');
                setTimeout(function () {
                    $('.wrapper').removeClass('active0').addClass('active500');
                }, 0);
                callback();
            }
        }, false);
        // hash变化时的处理 
        window.addEventListener('hashchange', function () {
            url = location.hash.slice(1) || '/';
            if (url == path) {
                $('.wrapper').removeClass('active500').addClass('active0');
                setTimeout(function () {
                    $('.wrapper').removeClass('active0').addClass('active500');
                }, 0);
                callback();
            }
        }, false);
    };
    window.Router = new Router();
})();

function loadContent(args) {
    $('.wrapper').html('<div class="theme-name">' +
        '<h1>' + args.h1 + '</h1>' +
        '</div>' +
        '<div class="content" id="content">' +
        '<div class="pic-box">' +
        '<img src="./static/assets/images/' + args.picName + '" alt="porsche">' +
        '</div>' +
        '<div class="introduction-box">' +
        '<h4>' + args.h4 + '</h4>' +
        '</div></div>');
}
// 注意：这里的path要和html里面锚链接对应 
// 如：‘#/’对应‘/’, '#/page2'对应'/page2' 
Router.route('/', function () {
    var params = {
        h1: "Porsche 911",
        picName: "p2.jpg",
        h4: "Porsche 911 GT3"
    };
    loadContent(params);
});
Router.route('/Lamborghini', function () {
    var params = {
        h1: "Lamborghini",
        picName: "l1.jpg",
        h4: "Lamborghini Huracan"
    };
    loadContent(params);
});
Router.route('/Ferrari', function () {
    var params = {
        h1: "Ferrari",
        picName: "f1.jpg",
        h4: "Ferrari F12berlinetta"
    };
    loadContent(params);
});
Router.route('/Porsche718', function () {
    var params = {
        h1: "Porsche 718",
        picName: "p1.jpg",
        h4: "Porsche 718 Boxster"
    };
    loadContent(params);
});