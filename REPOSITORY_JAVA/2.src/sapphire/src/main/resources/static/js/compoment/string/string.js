/**
 * Created by Administrator on 2016/11/6.
 */
(function ($) {
    $.String = function () {

        // region Fields

        var self = this;
        this.COMPOMENT_NAME = "String";

        // endregion

        // region format

        this.format = function () {
            if (arguments.length == 0)
                return null;
            var str = arguments[0];
            for (var i = 1; i < arguments.length; i++) {
                var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
                str = str.replace(re, arguments[i]);
            }
            return str;
        };

        // endregion

        // region encode

        this.encode = function () {
            if (arguments.length == 0) {
                return "";
            }
            var str = arguments[0];
            for (var i = 1; i < arguments.length; i++) {
                str += ("_" + arguments[i]);
            }
            return str;
        };

        // endregion
    };
})(jQuery);
var String = new $.String();