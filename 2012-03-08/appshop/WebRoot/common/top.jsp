<%@ page contentType="text/html; charset=GBK"%>
<script>
function do_submit(){
  var keyword=document.getElementById('keyword').value;
  var type=document.getElementById('type').value;
  var url;
  switch(parseInt(type))
   {
	   case 1:
	     url='merchandiseInfoSearch.action';
	     break
	   case 2:
	     url='movementInfoSearch.action';
	     break
	   case 3:
	     url='voucherInfoSearch.action';
	     break
   }
   topForm.action=url;
   topForm.submit();
}
</script>
<form name="topForm" method="post" >
<div class="login-panel"></div>
      	<div class="search-panel">
            	<input type="text" name="keyword" id="keyword" class="input-text" value="������ؼ���" />
            	<select name="type" id="type">
            	   <option value="1">��Ʒ</option>
            	   <option value="2">�</option>
            	    <option value="3">�Ż�ȯ</option>
            	</select>
            	<input type="button" class="input-btn" onclick="do_submit();" value="����" />
                <a href="search.action">�߼�����</a>|<a href="help.jsp">��������</a>|<a href="contact.jsp">��ϵ����</a>|<a href="index.jsp">��ҳ</a>
 </div>
 </form>