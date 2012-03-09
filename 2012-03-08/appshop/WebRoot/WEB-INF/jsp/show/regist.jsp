<%@ page contentType="text/html; charset=GBK"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<html>
	<head>
		<title>用户注册</title>
		<script src="js/prototype-1.4.0.js" type="text/javascript">
		</script>
		<script src="js/json.js" type="text/javascript">
		</script>
		<script language="JavaScript">
			function validateName(){
				//请求的地址
				var url = 'validateName.action';
				alert();
				var params = Form.Element.serialize('name');
				//创建Ajax.Request对象，对应于发送请求
				var myAjax = new Ajax.Request(
				url,
				{
					//请求方式：POST
					method:'post',
					//请求参数
					parameters:params,
					//指定回调函数
					onComplete: processResponse,
					//是否异步发送请求
					asynchronous:true
				});
			}
			function processResponse(request){
				var action = request.responseText.parseJSON();
				$("tip").innerHTML = action.tip;
			}	
		</script>
	</head>
	<body>
		<center>
		<h3>请输入注册信息</h3>
		<s:actionerror/>
		<span id="tip" style="color:red;font-weight:bold"></span>

		<s:form action="registUpdate.action" theme="simple">
			验证码：<img src="authImg" id="authImg"/>
			<s:textfield id="name" name="name" label="用户名" onblur="validateName();"/>
			<s:password name="pass" label="密码"/>
			<s:textfield name="email" label="邮箱"/>
			<s:textfield name="age" label="年龄"/>
			<s:textfield name="birth" label="出生年月" />
			<s:hidden name="id" />
			<s:textfield name="verCode" label="验证码" value=""/>
			<s:submit value="注册"/>
			<s:token />
		</s:form>
		</center>
	</body>
</html>