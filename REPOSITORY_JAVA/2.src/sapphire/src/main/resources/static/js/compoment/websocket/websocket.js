/**
 * Created by Administrator on 2016/11/4.
 */
(function ($) {
    $.SapphireWebsocket = function () {

        // region Fields

        var self = this;
        this.COMPOMENT_NAME = "SapphireWebsocket";

        var websocket = undefined;

        // endregion

        // region init

        this.init = function () {
            // websocket
            websocket = new SockJS(CONTEXT_PROTOCOL + CONTEXT_HOST + CONTEXT_PATH + "/sockjs/echo");

            websocket.onopen = function (evnt) {
                console.log(self.COMPOMENT_NAME + " : connected to " + evnt);
            };
            websocket.onmessage = function (evnt) {
                console.log(self.COMPOMENT_NAME + " : recive msg " + evnt);
                // TODO: 收到消息后根据key找到处理方法，并执行处理方法

            };
            websocket.onerror = function (evnt) {
                console.log(self.COMPOMENT_NAME + " : recive error " + evnt);
            };
            websocket.onclose = function (evnt) {
                console.log(self.COMPOMENT_NAME + " : lost connect to " + evnt);
            };
        };

        // endregion

        this.send = function (strMsg) {
            websocket = new SockJS(CONTEXT_PROTOCOL + CONTEXT_HOST + CONTEXT_PATH + "/sockjs/echo");
            if (websocket != null) {
                websocket.send(strMsg);
            }
            else {
                console.log(self.COMPOMENT_NAME + " : there is no connect");
            }
        };

    };
})(jQuery);
var SapphireWebsocket = new $.SapphireWebsocket();
