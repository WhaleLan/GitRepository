/**
 * Created by Administrator on 2016/11/6.
 */
(function ($) {
    $.MainPage = function () {

        // region Feilds

        var self = this;
        this.MOUDLE_NAME = "MainPage";

        var bodyWidth = 0;
        var mapBodyId2Html = {};

        // endregion

        // region Init

        this.load = function () {
            var strHeadHtml = '\
                        <div class="container">\
                            <div class="navbar-header">\
                                <a href="#" id="sapphire_nav_home" class="navbar-brand">Sapphire</a>\
                            </div>\
                            <div class="navbar-collapse collapse">\
                                <ul id="sapphire_nav_left" class="nav navbar-nav">\
                                </ul>\
                                <ul id="sapphire_nav_right" class="nav navbar-nav navbar-right">\
                                </ul>\
                            </div>\
                        </div>';
            $("#sapphire_head").append(strHeadHtml);

        };

        // endregion

        // region registry nav left

        this.registry4NavLeft = function (strHtmlItem) {
            var strHtml = '<li>{0}</li>';
            strHtml = String.format(strHtml, strHtmlItem);
            $("#sapphire_nav_left").append(strHtml);
        };

        // endreigon


        // region registry nav right

        this.registry4NavRight = function (strHtmlItem) {
            var strHtml = '<li>{0}</li>';
            strHtml = String.format(strHtml, strHtmlItem);
            $("#sapphire_nav_right").append(strHtml);
        };

        // endregion

        // region registry body area

        /**
         *
         * @param id
         * @param strHtmlItem
         */
        this.registry4Body = function (id, strHtmlItem) {
            var strHtml = '<div id="{0}" class="container-fluid hidden"></div>';
            strHtml = String.format(strHtml, id);
            $("#sapphire_body").append(strHtml);
            $("#" + id).append(strHtmlItem);

            mapBodyId2Html[id] = strHtml;

        };

        // endregion

        // region active page

        this.activePage = function (id) {
            for(var item in mapBodyId2Html){
                $("#" + item).addClass("hidden");
            }
            $("#" + id).removeClass("hidden");
        };

        // endregion
    };
})(jQuery);