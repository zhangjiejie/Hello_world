<%@ page contentType="text/html; charset=GBK"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<link href="nresources/css/layout.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="njs/jquery/jquery-1.3.min.js"></script>
<script type="text/javascript" src="njs/framework.js"></script>
<script type="text/javascript">
	$(function(){
		autoscroll($("#hider01 ul.content"),26);
	})
</script>
<!-- ������Ʒ-->
           <div id="hider01" class="col-right-ctn hider">
        	<ul id="tips01" class="product-list content">
        	 <s:iterator id="MerchandiseInfo" value="list" status="st">
        	   <li>
                	<a href="#"><span><img src="images/<s:property value="icon"/>" /></span><p><s:property value="name"/></p><b>�ػݼ�:��<s:property value="current_price"/>Ԫ</b></a>
                </li>
        	 
        	 </s:iterator>
            </ul>
            <div class="clear"></div>		
       </div>