/**
 * Created by Administrator on 2016/11/26.
 */
(function ($) {
    $.SapphireWebSql = function () {

        // region Fields

        var self = this;
        this.COMPOMENT_NAME = "SapphireWebSql";

        var sapphireDB = undefined;

        // endregion

        // region init

        this.init = function () {
            //创建数据库
            sapphireDB = openDatabase("sapphireDB", "1.0", "sapphireDB", 1024 * 1024);
            if (!sapphireDB) {
                console.log("Failed to connect to database.");
            } else {
                console.log("connect to database 'sapphireDB'.");
            }

            // 创建表
            sapphireDB.transaction(function (tx) {
                tx.executeSql(
                    "CREATE TABLE IF NOT EXISTS users " +
                    "(" +
                    "id INT AUTO_INCREMENT PRIMARY KEY, " +
                    "username VARCHAR(32) NOT NULL ,  " +
                    "password VARCHAR(32) NOT NULL ," +
                    "email VARCHAR(32) NOT NULL" +
                    ")",
                    [],
                    function () {
                        console.log('创建users表成功');
                    },
                    function (tx, error) {
                        console.log('创建users表失败:' + error.message);
                    }
                );
            });
        };

        // endregion

        // region excuteSql

        this.excuteSql = function (strSql, args, successInfo, failedInfo) {
            db.transaction(function (tx) {
                tx.executeSql(
                    strSql,
                    [args],
                    function () {
                        console.log(successInfo);
                    },
                    function (tx, error) {
                        console.log(failedInfo + error.message);
                    }
                );
            });
        };

        // endregion

    };
})(jQuery);
var SapphireWebSql = new $.SapphireWebSql();