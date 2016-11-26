/**
 * Created by Administrator on 2016/11/26.
 */
(function ($) {
    $.SapphireLocalStorage = function () {

        // region Fields

        var self = this;
        this.COMPOMENT_NAME = "SapphireLocalStorage";


        // endregion

        // region init

        this.init = function () {
            if (!localStorage) {
                console.log("not souport localStorage");
            }
            else {
                console.log("can use localStorage");
            }
        };

        // endregion

        // region setItem

        this.setItem = function (strKey, oValue) {
            localStorage.setItem("me", JSON.stringify(oValue));
        };

        // endregion

        // region getItem

        this.getItem = function (strKey) {
            return JSON.parse(localStorage.getItem(strKey));
        };

        // endregion

    };
})(jQuery);
var SapphireLocalStorage = new $.SapphireLocalStorage();