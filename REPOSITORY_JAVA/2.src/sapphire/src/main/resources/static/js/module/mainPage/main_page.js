/**
 * Created by Administrator on 2016/11/6.
 */
(function ($) {
    $.MainPage = function () {

        // region Feilds

        var self = this;
        this.MOUDLE_NAME = "MainPage";

        // endregion

        // region Init

        this.load = function () {
            var strHtml = '\
                <div style="height: 55px; width: 100%">\
                    <nav class="navbar navbar-inverse">\
                        <div class="container">\
                            <div class="navbar-header">\
                                <a href="#" id="sapphire_nav_home" class="navbar-brand">Sapphire</a>\
                            </div>\
                            <div class="navbar-collapse collapse">\
                                <ul class="nav navbar-nav">\
                                    <li>\
                                        <a href="#">Login</a>\
                                    </li>\
                                    <li>\
                                        <a href="#">Registry</a>\
                                    </li>\
                                </ul>\
                                <ul class="nav navbar-nav navbar-right">\
                                    <li>\
                                        <a href="#">Login</a>\
                                    </li>\
                                    <li>\
                                        <a href="#">Registry</a>\
                                    </li>\
                                </ul>\
                            </div>\
                        </div>\
                    </nav>\
                </div>';
            $("body").append(strHtml);
        };

        // endregion
    };
})(jQuery);