<%@ page contentType="text/html; charset=GBK"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<html>
	<head>
		<title>�û��б�</title>
	</head>
	<body>
	<center>
		<h3>�û��б�     <a href="logout.action">�˳�</a></h3>
		
				
				<span id="tip" style="color:red;font-weight:bold"><s:actionerror/></span>
				<span id="tip" style="color:red;font-weight:bold"><s:property value="tip" /></span>
				
		<table border=2>
		<s:iterator id="user" value="list" status="st">
			<tr>
				<td> <s:property value="name" /> </td>
				<td> <s:property value="age" /> </td>
				<td> <s:property value="email" /> </td>
				<td> <s:property value="birth" /> </td>
				<td><a href="showUser.action?id=<s:property value="id" />">��ʾ</a></td>
			</tr>
		</s:iterator>
		</table>
	</center>
	</body>
</html>