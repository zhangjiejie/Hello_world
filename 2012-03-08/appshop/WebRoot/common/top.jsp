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
            	<input type="text" name="keyword" id="keyword" class="input-text" value="请输入关键字" />
            	<select name="type" id="type">
            	   <option value="1">商品</option>
            	   <option value="2">活动</option>
            	    <option value="3">优惠券</option>
            	</select>
            	<input type="button" class="input-btn" onclick="do_submit();" value="搜索" />
                <a href="search.action">高级搜索</a>|<a href="help.jsp">帮助中心</a>|<a href="contact.jsp">联系我们</a>|<a href="index.jsp">首页</a>
 </div>
 </form>