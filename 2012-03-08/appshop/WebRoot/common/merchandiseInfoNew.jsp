<%@ page contentType="text/html; charset=GBK"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@ include file="/common/basePath.jsp"%>
<link href="<%=basePath %>/nresources/css/layout.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="<%=basePath %>/njs/jquery/jquery-1.3.min.js"></script>
<script type="text/javascript" src="<%=basePath %>/njs/framework.js"></script>
<script type="text/javascript">
	$(function(){
		autoscroll($("#hider01 ul.content"),26);
	})
</script>
     <!-- ������Ʒ-->
         <div class="col-right">
           <div id="hider01" class="col-right-ctn hider">
        	<ul id="tips01" class="product-list content">
        	 <s:iterator id="MerchandiseInfo" value="list" status="st">
        	    <li>
                	<a href="<%=basePath%>/merchandiseInfodetail.action?id=<s:property value="id"/>" target="_blank"><span><img  src="<%=imgPath %>/<s:property value="icon"/>" /></span><p><s:property value="name"/></p><b>�ػݼ�:��<s:property value="current_price"/>Ԫ</b></a>
                </li>
        	 </s:iterator>
            </ul>
            <div class="clear"></div>		
       </div>
       </div>