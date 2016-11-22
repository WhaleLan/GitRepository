/**
 * Created by Administrator on 2016/11/11.
 */
(function ($) {
    $.Login = function () {

        // region Fields

        var self = this;
        this.MOUDLE_NAME = "Login";

        // id
        var userNameInputId = String.encode(self.MOUDLE_NAME, "MODULE", "username");
        var passWordInputId = String.encode(self.MOUDLE_NAME, "MODULE", "password");
        var infoTextContainerId = String.encode(self.MOUDLE_NAME, "MODULE", "loginInfoText");
        var rememberMeCheckBoxId = String.encode(self.MOUDLE_NAME, "MODULE", "rememberMeCheckBox");
        var signInBtnId = String.encode(self.MOUDLE_NAME, "MODULE", "signInBtn");
        var signUpBtnId = String.encode(self.MOUDLE_NAME, "MODULE", "signUpBtn");

        // endregion

        // region load

        this.load = function () {
            // 1. html
            var strHtml = '<div class="container-fluid sapphire-login">\
                    <div class="login-block">\
                        <form class="form-horizontal">\
                            <!-- User Name 输入 -->\
                            <div class="form-group">\
                                <label for="{0}" class="col-sm-3 control-label">User Name</label>\
                                <div class="col-sm-9">\
                                    <input id="{0}" type="username" class="form-control"  placeholder="User Name">\
                                </div>\
                            </div>\
                            <!-- Pass Word 输入 -->\
                            <div class="form-group">\
                                <label for="{1}" class="col-sm-3 control-label">Pass Word</label>\
                                <div class="col-sm-9">\
                                    <input id="{1}" type="password" class="form-control"  placeholder="Pass Word">\
                                </div>\
                            </div>\
                            <!-- 登录结果提示信息 -->\
                            <div class="form-group">\
                                <div class="col-sm-offset-3 col-sm-9">\
                                    <p id="{2}" class="text-danger"></p>\
                                </div>\
                            </div>\
                            <!-- 记住登录状态 -->\
                            <div class="form-group">\
                                <div class="col-sm-offset-3 col-sm-9">\
                                    <div class="checkbox">\
                                        <label>\
                                            <input id="{3}" type="checkbox">Remember me</input>\
                                        </label>\
                                    </div>\
                                </div>\
                            </div>\
                            <!-- 登录 注册按钮 -->\
                            <div class="form-group">\
                                <div class="col-sm-offset-3 col-sm-9">\
                                    <div class="col-sm-6"><button id="{4}" type="button" class="btn btn-block btn-success">Sign In</button></div>\
                                    <div class="col-sm-6"><button id="{5}" type="button" class="btn btn-block btn-success">Sign Up</button></div>\
                                </div>\
                            </div>\
                        </form>\
                    </div>\
                </div>';
            strHtml = String.format(strHtml, userNameInputId, passWordInputId,
                infoTextContainerId, rememberMeCheckBoxId, signInBtnId, signUpBtnId);

            // 2. registry to main page
            MODULE_BUS.getModule("MainPage").registry4Body("sapphire_login_page", strHtml);

            // 3. band event
            $("#" + signInBtnId).click(function () {
                _signIn();
            });

            $("#" + signUpBtnId).click(function () {
                _signUp();
            });
        };

        // endregion

        // region _signIn

        var _signIn = function () {
            _getUserNameAndPassWord(function (strUserName, strPassWord) {
                _validateText(strUserName, strPassWord, function () {
                    _infoMsg("");
                    _postToCheckUser(function (res) {
                        _successSignIn(res);
                    }, function (res) {
                        _failedSignIn(res);
                    });
                }, function (strErrorTextInfo) {
                    _infoMsg(strErrorTextInfo);
                });
            });
        };

        var _getUserNameAndPassWord = function (oAfterGetUserNameAndPassWordCallback) {
            var strUserName = $("#" + userNameInputId).val();
            var strPassWord = $("#" + passWordInputId).val();
            oAfterGetUserNameAndPassWordCallback(strUserName, strPassWord);
        };

        var _validateText = function (strUserName, strPassWord, oValidateSuccessCallback, oValidateFailedCallback) {
            var reg = /^[0-9a-zA-Z]+$/;
            var bUserNameOk = reg.test(strUserName);
            var bPassWordOk = reg.test(strPassWord);
            if (bUserNameOk && bPassWordOk) {
                console.log(self.MOUDLE_NAME + " : validate ok ...");
                oValidateSuccessCallback();
            }
            else {
                console.log(self.MOUDLE_NAME + " : validate pok ...");
                oValidateFailedCallback("用户名或密码中含有非法字符！");
            }

        };

        var _infoMsg = function (strErrorTextInfo) {
            $("#" + infoTextContainerId).text(strErrorTextInfo);
        };

        var _postToCheckUser = function (oPostToCheckOkCallback, oPostToCheckPokCallback) {
            // TODO :　POST
            oPostToCheckOkCallback();
        };

        var _failedSignIn = function (res) {

        };

        var _successSignIn = function (res) {
            console.log(self.MOUDLE_NAME + " : post to check in success ...");
            console.log(self.MOUDLE_NAME + " : change to chat room page ...");
        };

        // endregion

        // region _signUp

        var _signUp = function () {
            MODULE_BUS.getModule("MainPage").activePage("sapphire_registry_page");
        };

        // endregion
    };
})(jQuery);