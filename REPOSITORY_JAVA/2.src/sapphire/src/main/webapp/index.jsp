<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script src="http://code.jquery.com/jquery-latest.js"></script>
<title>WhaleLan</title>
<script type="text/javascript">
	$(document).ready(function() {
		var params = {
			clientName : "lanjing",
			clientId : "123456"
		}

		$("#testPost").click(function() {
			$.ajax({
				// 提交数据的类型 POST GET
				type : "post",
				// 提交的网址
				url : "/zombie/zombieing",
				// 提交的数据
				data : JSON.stringify(params),
				// 提交的数据类型
				contentType : "application/json;charset=UTF-8",
				// 返回数据的格式
				datatype : "json",// "xml", "html", "script", "json", "jsonp",
				// "text".
				// 在请求之前调用的函数
				beforeSend : function() {
					console.log("beforeSend");
				},
				// 成功返回之后调用的函数
				success : function(result) {
					console.log("success");
					console.log(result);
				},
				// 调用执行后调用的函数
				complete : function(XMLHttpRequest, textStatus) {
					console.log("complete");
				},
				// 调用出错执行的函数
				error : function() {
					console.log("system error!");
				}
			});
		});
	});
</script>
</head>

<body>
	<h2>MVC_TEST : Hello World!</h2>
	<button id="testPost">POST</button>
	<a href="/zombie/startZombie">helloWorld</a>
</body>
</html>
