/**
 * Created by Administrator on 2016/11/6.
 */
(function ($) {
    $.ModuleBus = function () {
        // region Feilds

        var self = this;
        this.MOUDLE_NAME = "ModuleBus";

        var modules = {};

        // endregion

        // region Init

        this.init = function () {
            // 从配置文件中读出 并初始化modules
            modules = {
                "MainPage": new $.MainPage(),
                "System" : new $.System()
            }
        };

        // endregion

        // region load modules

        this.loadModules = function () {
              for (var module in modules){
                  console.log(self.MOUDLE_NAME + " : load module " + module);
                  modules[module].load();
              }
        };

        // endregion

        // region getModule

        this.getModule = function (strModuleName) {
            var modlue = modules[strModuleName];
            if (modlue) {
                return modlue;
            }
            console.log(self.MOUDLE_NAME + " : There is no Module named " + strModuleName);
        };

        // endregion
    };
})(jQuery);