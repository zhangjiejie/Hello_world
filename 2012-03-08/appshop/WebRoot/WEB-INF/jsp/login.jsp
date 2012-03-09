<%@ page contentType="text/html; charset=GBK"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<html>
	<head>
		<title>用户注册</title>
		<script src="js/prototype-1.4.0.js" type="text/javascript">
		</script>
		<script src="js/json.js" type="text/javascript">
		</script>
		
	</head>
	<body>
		<center>
		<h3>
		</h3>
		<s:actionerror/>
		<span id="tip" style="color:red;font-weight:bold">
			<s:property value="tip"/>
		</span>

		<s:form action="loginUser.action">
			
			<s:textfield id="name" name="name" label="用户名" />
			<s:password name="pass" label="密码"/>
			
			<s:submit value="登陆"/> <a href="regist.action">注册</a>
			<s:token />
		</s:form>
		</center>
	</body>
</html>