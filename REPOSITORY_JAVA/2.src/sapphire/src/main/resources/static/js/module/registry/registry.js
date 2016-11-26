/**
 * Created by Administrator on 2016/11/11.
 */
(function ($) {
    $.Registry = function () {
        // region Feilds

        var self = this;
        this.MOUDLE_NAME = "Registry";

        var userNameInputId = String.encode(self.MOUDLE_NAME, "MODULE", "userNameInputId");
        var emailInputId = String.encode(self.MOUDLE_NAME, "MODULE", "emailInputId");
        var passwordInputId = String.encode(self.MOUDLE_NAME, "MODULE", "passwordInputId");
        var confirmBtnId = String.encode(self.MOUDLE_NAME, "MODULE", "confirmBtnId");

        var userInfo = {
            userName: "",
            password: "",
            email: ""
        };

        // endregion

        // region load

        this.load = function () {
            // 1. html
            var strHtml = '<div class="container-fluid sapphire-registry">\
                    <div class="registry-block">\
                        <form class="form-horizontal">\
                            <!-- User Name 输入 -->\
                            <div class="form-group">\
                                <label for="{0}" class="col-sm-3 control-label">User Name</label>\
                                <div class="col-sm-9">\
                                    <input id="{0}" type="username" class="form-control"  placeholder="User Name">\
                                </div>\
                            </div>\
                            <!-- e-mail 输入 -->\
                            <div class="form-group">\
                                <label for="{1}" class="col-sm-3 control-label">E mail</label>\
                                <div class="col-sm-9">\
                                    <input id="{1}" type="email" class="form-control"  placeholder="E mail">\
                                </div>\
                            </div>\
                            <!-- Pass Word 输入 -->\
                            <div class="form-group">\
                                <label for="{2}" class="col-sm-3 control-label">Pass Word</label>\
                                <div class="col-sm-9">\
                                    <input id="{2}" type="password" class="form-control"  placeholder="Pass Word">\
                                </div>\
                            </div>\
                            <!-- 登录 注册按钮 -->\
                            <div class="form-group">\
                                <div class="col-sm-offset-3 col-sm-9">\
                                    <button id="{3}" type="button" class="btn btn-block btn-success">Create My Count</button>\
                                </div>\
                            </div>\
                        </form>\
                    </div>\
                </div>';

            strHtml = String.format(strHtml, userNameInputId, emailInputId,
                passwordInputId, confirmBtnId);

            // 2. registry to main page
            MODULE_BUS.getModule("MainPage").registry4Body("sapphire_registry_page", strHtml);

            // 3. band event
            $("#" + confirmBtnId).click(function () {
                _registryUser();
            });
        };

        // endregion

        // region _registryUser

        var _registryUser = function () {
            _getUserInfo(function (userInfo) {
                _validataUserInfo(userInfo, function (userInfo) {
                    _post4RegistryUser(userInfo, function () {
                        _post4RegistryOk();
                    }, function (postFailMsg) {
                        _infoMsg(postFailMsg);
                    });
                }, function (valFailMsg) {
                    _infoMsg(valFailMsg);
                });
            });
        };

        var _getUserInfo = function (oAfterGetUserInfoCallback) {

        };

        var _validataUserInfo = function (userInfo, oValSuccessCallback, oValFailedCallback) {

        };

        var _post4RegistryUser = function (userInfo, post4RegistryOkCallback, post4RegistryPokCallback) {

        };

        var _infoMsg = function (strMsg) {

        };

        // endregion

        // region _post4RegistryOk

        var _post4RegistryOk = function () {

        };

        // endregion
    };
})(jQuery);