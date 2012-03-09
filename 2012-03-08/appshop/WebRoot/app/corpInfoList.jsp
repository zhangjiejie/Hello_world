<%@ page contentType="text/html; charset=GBK"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@taglib prefix="app" uri="/tags/app"%>
<html>
	<head>
		<title>商户列表</title>
	</head>
	<body>
	<center>

	<span id="tip" style="color:red;font-weight:bold"><s:actionerror/></span>
	<span id="tip" style="color:red;font-weight:bold"><s:property value="tip" /></span>
				
		<table border=2>
		<s:iterator id="corpInfo" value="list" status="st">
			<tr>
				<td> <s:property value="id" /> </td>
				<td> <s:property value="corp_name" /> </td>
				<td> <s:property value="corp_address" /> </td>
				<td> <s:property value="corp_phone" /> </td>
				<td> <s:property value="create_time" /> </td>
				<td> <s:property value="status" /> </td>
			</tr>
		</s:iterator>
		</table>
	</center>
	</body>
</html>