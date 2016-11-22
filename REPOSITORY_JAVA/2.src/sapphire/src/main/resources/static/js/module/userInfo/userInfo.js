/**
 * Created by Administrator on 2016/11/11.
 */
(function ($) {
    $.UserInfo = function () {
        // region Feilds

        var self = this;
        this.MOUDLE_NAME = "UserInfo";

        // endregion

        // region load

        this.load = function () {
            // 0. registry in left nav
            var strHtml = '<a>未登入</a>';
            MODULE_BUS.getModule("MainPage").registry4NavRight(strHtml);
        };

        // endregion
    };
})(jQuery);