/**
 * Created by Administrator on 2016/12/2.
 */
(function ($) {
    $.Mock = function () {

        // region Fields

        var self = this;
        this.COMPOMENT_NAME = "Mock";

        // endregion

        // region config

        this.AJAX_MOCK = true;

        // endregion

    };
})(jQuery);
var Mock = new $.Mock();