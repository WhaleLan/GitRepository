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
        var infoTextContainerId = String.encode(self.MOUDLE_NAME, "MODULE", "loginInfoText");
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
                            <!-- 提示 -->\
                            <div class="form-group">\
                                <div class="col-sm-offset-3 col-sm-9">\
                                    <p id="{3}" class="text-danger"></p>\
                                </div>\
                            </div>\
                            <!-- 登录 注册按钮 -->\
                            <div class="form-group">\
                                <div class="col-sm-offset-3 col-sm-9">\
                                    <button id="{4}" type="button" class="btn btn-block btn-success">Create My Count</button>\
                                </div>\
                            </div>\
                        </form>\
                    </div>\
                </div>';

            strHtml = String.format(strHtml, userNameInputId, emailInputId,
                passwordInputId, infoTextContainerId, confirmBtnId);

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
                _validateUserInfo(userInfo, function (userInfo) {
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
            var strUserName = $("#" + userNameInputId).val();
            var strEmail = $("#" + emailInputId).val();
            var strPassword = $("#" + passwordInputId).val();
            userInfo = {
                userName: strUserName,
                password: strEmail,
                email: strPassword
            };
            oAfterGetUserInfoCallback(userInfo);
        };

        var _validateUserInfo = function (userInfo, oValSuccessCallback, oValFailedCallback) {
            var reg = /^[0-9a-zA-Z]+$/;
            var bUserNameOk = reg.test(userInfo.userName);
            var bPassWordOk = reg.test(userInfo.password);
            var bEmailOk = reg.test(userInfo.email);
            if (bUserNameOk && bPassWordOk && bEmailOk) {
                console.log(self.MOUDLE_NAME + " : validate ok ...");
                oValSuccessCallback(userInfo);
            }
            else {
                console.log(self.MOUDLE_NAME + " : validate pok ...");
                oValFailedCallback("用户名或密码中含有非法字符！");
            }
        };

        var _post4RegistryUser = function (userInfo, post4RegistryOkCallback, post4RegistryPokCallback) {
            var oArgs = {
                url : "",
                params : {

                },
                oAfterPostOk : function (){
                    post4RegistryOkCallback();
                },
                oAfterPostPok : function () {
                    post4RegistryPokCallback();
                },
                ajaxMockCallback : function () {
                    // 使用websql
                    var strSql = "insert into tbl_users (username, password, email) values (?, ?, ?)";
                    SapphireWebSql.excuteSql(strSql, [userInfo.userName, userInfo.password, userInfo.email], "插入数据成功", "插入数据失败");

                    post4RegistryOkCallback();
                }
            };
            SapphireAjax.post(oArgs);
        };

        var _infoMsg = function (strMsg) {
            $("#" + infoTextContainerId).text(strMsg);
        };

        // endregion

        // region _post4RegistryOk

        var _post4RegistryOk = function () {
            // GOTO chat page

        };

        // endregion
    };
})(jQuery);