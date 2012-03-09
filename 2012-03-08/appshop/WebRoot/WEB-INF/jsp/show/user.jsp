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
		<title>�û�ע��</title>
		<script src="<%=basePath %>/js/prototype-1.6.0.3.js" type="text/javascript">
		</script>
		<script src="<%=basePath %>/js/json.js" type="text/javascript">
		</script>
		<script language="JavaScript">
			function validateName(){
				//����ĵ�ַ
				var url = 'validateName.action';
				//var params =$('registUserUpdate').serialize(true);
				var params = Form.Element.serialize('user.name');
				alert(params);
				//����Ajax.Request���󣬶�Ӧ�ڷ�������
				var myAjax = new Ajax.Request(
				url,
				{
					//����ʽ��POST
					method:'post',
					//�������
					parameters:params,
					//ָ���ص�����
					onComplete: processResponse,
					//�Ƿ��첽��������
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
		<h3>������ע����Ϣ</h3>
		<s:actionerror/>
		<span id="tip" style="color:red;font-weight:bold"></span>

		<s:form action="registUserUpdate.action">
			��֤�룺<img src="authImg" id="authImg"/>
			<s:textfield id="user.name" name="user.name" label="�û���" onblur="validateName();"/>
			<s:password name="user.pass" label="����"/>
			<s:textfield name="user.email" label="����"/>
			<s:textfield name="user.age" label="����"/>
			<s:textfield name="user.birth" label="��������"/>
			<s:hidden name="user.id" />
			<s:textfield name="verCode" label="��֤��" value=""/>
			<s:submit value="ע��"/>
			<s:token />
		</s:form>
		</center>
	</body>
</html>