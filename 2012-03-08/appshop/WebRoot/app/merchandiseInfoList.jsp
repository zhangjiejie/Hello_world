<%@ page contentType="text/html; charset=GBK"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@taglib prefix="app" uri="/tags/app"%>
<html>
	<head>
		<title>商品列表</title>
	</head>
	<body>
	<s:form action="merchandiseInfo">
	<center>

	<span id="tip" style="color:red;font-weight:bold"><s:actionerror/></span>
	<span id="tip" style="color:red;font-weight:bold"><s:property value="tip" /></span>
				
		<table border=2>
		<s:iterator id="merchandiseInfo" value="list" status="st">
			<tr>
				<td> <s:property value="id" /> </td>
				<td> <s:property value="name" /> </td>
				<td> <s:property value="create_time" /></td>
			</tr>
		</s:iterator>
		</table>
		<app:pageController name="pageController" form="" />
	
	</center>
		</s:form>
	</body>
</html>