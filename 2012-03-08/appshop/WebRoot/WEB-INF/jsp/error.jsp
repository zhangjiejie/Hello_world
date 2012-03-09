<%@ page contentType="text/html; charset=GBK"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
   <title>出错提示页</title>
</head>
<body>
<TABLE width="780" align="center" CELLSPACING=0>
<tr> 
	<td height="39" valign=top>
	<br><div align="center"><font color="#FF0000" size="+1"><b>系统处理过程中发生了一个错误，信息如下：</b></font></div>
	</td>
</tr>
<tr>
	<td height="100" valign=top>
	<div class="error"><br><br>
	<s:property value="errMsg"/>
	<s:property value="exception"/>
	<s:property value="exception.message"/>
	<span style="color:red;font:9pt bold"><s:property value="exception.message"/></span>
	
	</div>
	</td>
</tr>
<tr>
	<td valign=top><div align="center" style="font:10pt">请您先核对输入，如果再次出现该错误，请与站长联系, 谢谢。</div><br></td>
</tr>
</table>
</body>
</html>