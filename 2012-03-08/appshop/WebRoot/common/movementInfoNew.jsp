<%@ page contentType="text/html; charset=GBK"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@ include file="/common/basePath.jsp"%>
<%@taglib prefix="app" uri="/tags/app"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>商易通商品列表</title>
	<link href="<%=basePath %>/nresources/css/layout.css" rel="stylesheet" type="text/css" />
	<script type="text/javascript" src="<%=basePath %>/njs/jquery/jquery-1.3.min.js"></script>
	<script type="text/javascript" src="<%=basePath %>/njs/framework.js"></script>
</head>
	
<body>
<div class="wrapper">
     <div class="top-banner">
      <%@ include file="/common/top.jsp" %>
    </div>
    
    <div class="col-left">
      <div class="col-left-title c-l-orange">商户排名</div>
       <iframe  align="top" id="ifram" frameborder="0" scrolling="no" src="<%=basePath%>/movementInfoList.action" width="100%" height="100%"></iframe>

        <div class="col-left-title c-l-green">公告信息</div>
        <div class="col-left-ctn">
			<div>
        	<p class="bulletin">
            <a>买大众礼包，送超值话费，山西移动商易通，超值优惠，超值活动。买大众礼包，送超值话费，山西移动商易通，超值优惠，超值活动。</a>
            </p>
			</div>
        </div>
        
        <div class="col-left-title c-l-pink">客户服务</div>
        <div class="col-left-ctn" style="padding:0;">
        	<ul class="customer-service">
            	<li><img src="<%=basePath %>/nresources/images/icon-deliver.gif" /><span>发货时间:<b>09:00-18:00</b></span></li>
                <li><img src="<%=basePath %>/nresources/images/icon-cell.gif" /><span>e购热线:<b>400-000-0000</b></span></li>
                <li style="border-bottom:none;"><img src="<%=basePath %>/nresources/images/icon-time.gif" /><span>客服值班时间:<b>09:00-18:00</b></span></li>
                
            </ul>
        </div>
        
        
        <div class="col-left-title c-l-blue">帮助中心</div>
 		<div class="col-left-ctn">
        	<ul class="help-center">
            	<li><a href="#"><img src="<%=basePath %>/nresources/images/help1.gif" />如何订购</a></li>
                <li><a href="#"><img src="<%=basePath %>/nresources/images/help2.gif" />如何优惠</a></li>
                <li><a href="#"><img src="<%=basePath %>/nresources/images/help3.gif" />售后服务</a></li>
                <li><a href="#"><img src="<%=basePath %>/nresources/images/help4.gif" />付款方式</a></li>
                <li><a href="#"><img src="<%=basePath %>/nresources/images/help1.gif" />图标待定</a></li>
                <li><a href="#"><img src="<%=basePath %>/nresources/images/help2.gif" />图标待定</a></li>
            </ul>
             <div class="clear"></div>
        </div>
    </div>
    
    <div class="col-right">
      <div class="col-right-title c-r-blue"><span>商品列表</span>
            <p><span>排序方式：</span><a href="#" class="btn-down">降序</a><a href="#" class="btn-up">升序</a></p>
        </div>
        <form name="merchandiseForm" action="<%=basePath%>/merchandiseInfolist.action">
        <div class="col-right-ctn">
        	<ul class="product-list">
        	   <s:iterator id="merchandiseInfo" value="list">
            	 <li>
                	 <a href="#"><span><img src="<%=imgPath%>/<s:property value="icon"/>" /></span><p><s:property value="name"/></p><b>特惠价:￥<s:property value="current_price"/>元</b></a>   
                </li>
               </s:iterator>
            </ul>
            <div class="clear"></div>
            <div class="next-pages">
                  <app:pageController name="pageController" form="merchandiseForm" />     
             </div>
        </div>
        </form>
     
    </div>
</div>
<div class="footer">
  <p>版权所有 (c) 2009 中国移动通信集团山西分公司</p>
</div>
</body>
</html>
   