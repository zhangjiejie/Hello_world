<%@ page contentType="text/html; charset=GBK"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<html>
	<head>
		<title>�û�ע��</title>
		<script src="js/prototype-1.4.0.js" type="text/javascript">
		</script>
		<script src="js/json.js" type="text/javascript">
		</script>
		<script language="JavaScript">
			function validateName(){
				//����ĵ�ַ
				var url = 'validateName.action';
				alert();
				var params = Form.Element.serialize('name');
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

		<s:form action="registUpdate.action" theme="simple">
			��֤�룺<img src="authImg" id="authImg"/>
			<s:textfield id="name" name="name" label="�û���" onblur="validateName();"/>
			<s:password name="pass" label="����"/>
			<s:textfield name="email" label="����"/>
			<s:textfield name="age" label="����"/>
			<s:textfield name="birth" label="��������" />
			<s:hidden name="id" />
			<s:textfield name="verCode" label="��֤��" value=""/>
			<s:submit value="ע��"/>
			<s:token />
		</s:form>
		</center>
	</body>
</html>