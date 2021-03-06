<%@ page contentType="text/html; charset=GBK"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path;
 %>
<html>
	<head>
		<title>用户注册</title>
		<script src="<%=basePath %>/js/prototype-1.6.0.3.js" type="text/javascript">
		</script>
		<script src="<%=basePath %>/js/json.js" type="text/javascript">
		</script>
		<script language="JavaScript">
			function validateName(){
				//请求的地址
				var url = 'validateName.action';
				//var params =$('registUserUpdate').serialize(true);
				var params = Form.Element.serialize('user.name');
				alert(params);
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

		<s:form action="registUserUpdate.action">
			验证码：<img src="authImg" id="authImg"/>
			<s:textfield id="user.name" name="user.name" label="用户名" onblur="validateName();"/>
			<s:password name="user.pass" label="密码"/>
			<s:textfield name="user.email" label="邮箱"/>
			<s:textfield name="user.age" label="年龄"/>
			<s:textfield name="user.birth" label="出生年月"/>
			<s:hidden name="user.id" />
			<s:textfield name="verCode" label="验证码" value=""/>
			<s:submit value="注册"/>
			<s:token />
		</s:form>
		</center>
	</body>
</html>