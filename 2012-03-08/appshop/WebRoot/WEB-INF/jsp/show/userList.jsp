<%@ page contentType="text/html; charset=GBK"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<html>
	<head>
		<title>用户列表</title>
	</head>
	<body>
	<center>
		<h3>用户列表     <a href="logout.action">退出</a></h3>
		
				
				<span id="tip" style="color:red;font-weight:bold"><s:actionerror/></span>
				<span id="tip" style="color:red;font-weight:bold"><s:property value="tip" /></span>
				
		<table border=2>
		<s:iterator id="user" value="list" status="st">
			<tr>
				<td> <s:property value="name" /> </td>
				<td> <s:property value="age" /> </td>
				<td> <s:property value="email" /> </td>
				<td> <s:property value="birth" /> </td>
				<td><a href="showUser.action?id=<s:property value="id" />">显示</a></td>
			</tr>
		</s:iterator>
		</table>
	</center>
	</body>
</html>