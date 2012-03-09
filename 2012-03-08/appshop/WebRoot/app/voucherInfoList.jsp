<%@ page contentType="text/html; charset=GBK"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<html>
	<head>
		<title>”≈ª›»Ø¡–±Ì</title>
	</head>
	<body>
	<center>

	<span id="tip" style="color:red;font-weight:bold"><s:actionerror/></span>
	<span id="tip" style="color:red;font-weight:bold"><s:property value="tip" /></span>
				
		<table border=2>
		<s:iterator id="voucherInfo" value="list" status="st">
			<tr>
				<td> <s:property value="id" /> </td>
				<td> <s:property value="voucher_no" /> </td>
			</tr>
		</s:iterator>
		</table>
	</center>
	</body>
</html>