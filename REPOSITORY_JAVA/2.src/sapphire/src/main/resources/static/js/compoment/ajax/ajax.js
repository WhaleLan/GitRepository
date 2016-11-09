/**
 * Created by Administrator on 2016/11/4.
 */
(function ($) {
    $.SapphireAjax = function () {

        // region Fields

        var self = this;
        this.COMPOMENT_NAME = "SapphireAjax";

        // endregion

        // region post
        /**
         *
         * @param oArg
         * {
         *     url : CONTEXT_PATH + "/zombie/zombieing",
         *     params : {
         *          clientName : "lanjing",
			        clientId : "123456"
         *     },
         *     oAfterPostOk : function () {
         *
         *     },
         *     oAfterPostPok : function () {
         *
         *
         *     }
         *
         * }
         */
        this.post = function (oArg) {
            $.ajax({
                // 提交数据的类型 POST GET
                type: "post",
                // 提交的网址
                url: oArg.url,
                // 提交的数据
                data: JSON.stringify(oArg.params),
                // 提交的数据类型
                contentType: "application/json;charset=UTF-8",
                // 返回数据的格式
                datatype: "json",// "xml", "html", "script", "json", "jsonp",
                // "text".
                // 在请求之前调用的函数
                beforeSend: function () {
                    //console.log("beforeSend");
                },
                // 成功返回之后调用的函数
                success: function (result) {
                    console.log(self.COMPOMENT_NAME + ": success ...");
                    oArg.oAfterPostOk();
                },
                // 调用执行后调用的函数
                complete: function (XMLHttpRequest, textStatus) {
                    console.log("complete");
                },
                // 调用出错执行的函数
                error: function () {
                    console.log(self.COMPOMENT_NAME + ": error ...");
                    oArg.oAfterPostPok();
                }
            });
        };

        // endregion

    };
})(jQuery);
var SapphireAjax = new $.SapphireAjax();