<%@ page contentType="text/html; charset=GBK"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
   <title>������ʾҳ</title>
</head>
<body>
<TABLE width="780" align="center" CELLSPACING=0>
<tr> 
	<td height="39" valign=top>
	<br><div align="center"><font color="#FF0000" size="+1"><b>ϵͳ��������з�����һ��������Ϣ���£�</b></font></div>
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
	<td valign=top><div align="center" style="font:10pt">�����Ⱥ˶����룬����ٴγ��ָô�������վ����ϵ, лл��</div><br></td>
</tr>
</table>
</body>
</html>