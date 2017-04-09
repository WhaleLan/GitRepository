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
            if(Mock.AJAX_MOCK){
                oArg.ajaxMockCallback();
            }
            else {
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
            }
        };

        // endregion

    };
})(jQuery);
var SapphireAjax = new $.SapphireAjax();




1. 新预期结果很靠谱 ，测试给出结论 -- 韩勇等测试人员
2. 老预期和现在不一样
    1）. 预期来自于刘萍  是否主要  测试人员分析
    2）. 算法需求  是否主要   测试人员分析
    3）. 算法更改  是否主要   测试人员分析

周三给出新的预期

规则 ： 需求变更需要维护预期结构


芳姐， 今天韩勇这边完成了120个用例的分析，结论是当前跑出来的规划结果是没有问题的，可以做为预期。
另外和孙发波打了电话确认了，算法的修改的确会引起规划结果的不同。

当前我分析跟之前的预期不同的原因有三个：
1.  原来版本的预期来自于测试人员手工驱动界面生成，具有不可靠性;
2.  算法测代码更改导致规划结果不同;
3.  算法测前段时间做了一个客户提出的需求，可能导致规划结果不同。

鉴于以上三个原因，我这边会安排测试进行分析，周三必须给出分析结果并提供最新预期。
另外，后续Gridtest预期的维护必须定一个规则：谁更改代码导致预期需要刷新，那么就由谁来维护和刷新预期。
