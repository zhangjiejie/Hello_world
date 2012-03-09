<%@ page contentType="text/html; charset=GBK"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@ include file="/common/basePath.jsp"%>
<%@taglib prefix="app" uri="/tags/app"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>商易通搜索列表</title>
	<link href="<%=basePath %>/nresources/css/layout.css" rel="stylesheet" type="text/css" />
	<script type="text/javascript" src="<%=basePath %>/njs/jquery/jquery-1.3.min.js"></script>
	<script type="text/javascript" src="<%=basePath %>/njs/framework.js"></script>
	<script type="text/javascript" src="<%=basePath %>/njs/tab.js"></script>
	<script type="text/javascript">
	 function do_search(theForm,url){
	    theForm.action=url;
	    theForm.submit();
	 }
	 function show_div(id){
		   document.getElementById(id).style.display="";
	 }
	 function hidden_div(id){
		   document.getElementById(id).style.display="none";
	 }
	</script>
</head>
	
<body>
<div class="wrapper">
     <div class="top-banner">
      <%@ include file="/common/top.jsp" %>
    </div>
    
    <div class="col-left">
      <div class="col-left-title c-l-orange">商户排名</div>
       <iframe  align="top" id="ifram" frameborder="0" scrolling="no" src="<%=basePath%>/voucherInfo.action" width="100%" height="280px"></iframe>
		<!--
        <div class="col-left-title c-l-green">公告信息</div>
        <div class="col-left-ctn">
			<div>
        	<p class="bulletin">
            <a>买大众礼包，送超值话费，山西移动商易通，超值优惠，超值活动。买大众礼包，送超值话费，山西移动商易通，超值优惠，超值活动。</a>
            </p>
			</div>
        </div>
        -->
         <div class="col-left-title c-l-pink">客户服务</div>
        <div class="col-left-ctn" style="padding:0;">
        	<ul class="customer-service">
            	<li><img src="<%=basePath %>/nresources/images/icon-deliver.gif" /><span>客服电话:<b>12580</b></span></li>
                <li style="border-bottom:none;"><img src="<%=basePath %>/nresources/images/icon-time.gif" /><span>客服值班时间:<b>全天</b></span></li>
                
            </ul>
        </div>
        
        
        <div class="col-left-title c-l-blue">帮助中心</div>
 		<div class="col-left-ctn">
        	<ul class="help-center">
            	<li><a href="<%=basePath %>/help.jsp"><img src="<%=basePath %>/nresources/images/help1.gif" />如何订购</a></li>
                <li><a href="<%=basePath %>/help.jsp"><img src="<%=basePath %>/nresources/images/help2.gif" />如何下载</a></li>
            </ul>
             <div class="clear"></div>
        </div>
    </div>
   <div class="col-right">
      <div class="col-right-title c-r-blue"><span>高级搜索</span></div>
      <div class="col-right-ctn">
        <div id="getId">
          <ul id="tabtag">
            <li id="tabId1" class="tab_on" onclick="tab('tabId1','tabC1');show_div('merchandiseInfoId');hidden_div('movementInfoId');hidden_div('voucherInfoId');"><a href="javascript:void(0)" onfocus="blur()">商品</a></li>
            <li id="tabId2" onclick="tab('tabId2','tabC2');show_div('movementInfoId');hidden_div('merchandiseInfoId');hidden_div('voucherInfoId');" ><a href="javascript:void(0)" onfocus="blur()">活动</a></li>
            <li id="tabId3" onclick="tab('tabId3','tabC3');show_div('voucherInfoId');hidden_div('merchandiseInfoId');hidden_div('movementInfoId');" ><a href="javascript:void(0)" onfocus="blur()">优惠券</a></li>
          </ul>
        </div>
      </div>
       
   <form name="merchandiseInfo" action="merchandiseInfoSearch.action" method="post">
    <div id="merchandiseInfoId" style="display:;" class="col-right-ctn">
           <div  class="show" id="tabC1">
          <div class="table-form">
              <table cellpadding="0" cellspacing="0">
              <caption>
                填写查询条件:
              </caption>
              <tr>
                <th>名称：</th>
                <td><input type="text"  name="name" value="<s:property value="queryBean.name"/>" class="input-text" /></td>
              </tr>
              <tr>
                <th>价格：</th>
                <td><input type="text"  name="begin_price" value="<s:property value="queryBean.begin_price"/>" class="input-text" />到<input type="text"  name="end_price" value="<s:property value="queryBean.end_price"/>" class="input-text" /></td>
              </tr>
               <tr>
                <th>所属商户：</th>
                <td><input type="text"  name="corp_name" value="<s:property value="queryBean.corp_name"/>" class="input-text" /></td>
              </tr>
            </table>
            <p align="center">
              <input type="image" src="<%=basePath %>/nresources/images/btn-search.gif" onclick="do_search('merchandiseInfo','<%=basePath %>/merchandiseInfoSearch.action');"/>
            </p>
          </div>
        </div>
       <s:if test="#request.merchandiseInfoSearchList!=null"> 
      <script>tab('tabId1','tabC1');show_div('merchandiseInfoId');hidden_div('movementInfoId');hidden_div('voucherInfoId');</script>
      <div class="col-right-title c-r-orange"><span>商品列表</span></div>
      <div class="col-right-ctn">
        <div class="clear"></div>
        <div class="table-data">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <th>商品名称</th>
              <th>商品图片</th>
              <th>价格</th>
              <th>数量</th>
              <th>所属商家</th>
            </tr>
           <s:iterator id="merchandiseInfo" value="merchandiseInfoSearchList" status="st">
            <tr>	
              <td><s:property value="name"/></td>
              <td><a href="#"><img src="<%=imgPath %>/<s:property value="icon"/>" /></a></td>
              <td><span><b>￥<s:property value="current_price"/>元</b></span></td>
              <td><span><s:property value="amount"/></span></td>
              <td><s:property value="corpInfo.corp_name"/></td>
            </tr>
            </s:iterator>
          </table>
          <div class="next-pages">
            <app:pageController name="pageController" form="merchandiseInfo" />    
          </div>
    </div>
    </div>
    </s:if>
    </div>
          </form>
     
   <form name="movementInfo" action="movementInfoSearch.action" method="post">     
    <div id="movementInfoId" style="display:none;" class="col-right-ctn">
          <div  class="hidden" id="tabC2">
             <div class="table-form">
           <table cellpadding="0" cellspacing="0">
              <caption>
                填写查询条件:
              </caption>
              <tr>
                <th>主题：</th>
                <td><input type="text"  name="mname" value="<s:property value="queryBean.name"/>" class="input-text" /></td>
              </tr>
               <tr>
                <th>所属商户：</th>
                <td><input type="text"  name="mcorp_name" value="<s:property value="queryBean.corp_name"/>" class="input-text" /></td>
              </tr>
              <tr>
                <th>活动时间：</th>
                <td><input type="text"  name="mbegin_time" value="<s:property value="queryBean.begin_time"/>" class="input-text" />到<input type="text"  name="mend_time" value="<s:property value="queryBean.end_time"/>" class="input-text" /></td>
              </tr>
            </table>
            <p align="center">
              <input type="image" src="<%=basePath %>/nresources/images/btn-search.gif" onclick="do_search('movementInfo','<%=basePath %>/movementInfoSearch.action');"/>
            </p>
         </div>
        </div>
       <s:if test="#request.movementInfoSearchList!=null"> 
        <script>tab('tabId2','tabC2');show_div('movementInfoId');hidden_div('merchandiseInfoId');hidden_div('voucherInfoId');</script>
      <div class="col-right-title c-r-orange"><span>活动列表</span></div>
      <div class="col-right-ctn">
        <div class="clear"></div>
        <div class="table-data">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <th>主题</th>
              <th>内容</th>
              <th>开始日期</th>
              <th>结束日期</th>
              <th>所属商家</th>
            </tr>
           <s:iterator id="movementInfo" value="movementInfoSearchList" status="st">
            <tr>	
              <td><s:property value="move_subject"/></td>
              <td><s:property value="move_content"/></td>
              <td><s:property value="begin_time"/></td>
              <td><s:property value="end_time"/></td>
              <td><s:property value="corpInfo.corp_name"/></td>
            </tr>
            </s:iterator>
          </table>
          <div class="next-pages">
            <app:pageController name="pageController" form="movementInfo" />    
          </div>
    </div>
    </div>
    </s:if>
    </div>    
        </form>   
        
     <form name="voucherInfo" action="voucherInfoSearch.action" method="post">
          <div id="voucherInfoId" style="display:none;" class="col-right-ctn">
                     <div  class="hidden" id="tabC3">
             <div class="table-form">
           <table cellpadding="0" cellspacing="0">
              <caption>
                填写查询条件:
              </caption>
              <tr>
                <th>优惠券号：</th>
                <td><input type="text"  name="vno" value="<s:property value="queryBean.no"/>" class="input-text" /></td>
              </tr>
              <tr>
                <th>所属商户：</th>
                <td><input type="text"  name="vcorp_name" value="<s:property value="queryBean.corp_name"/>" class="input-text" /></td>
              </tr>
            </table>
            <p align="center">
              <input type="image" src="<%=basePath %>/nresources/images/btn-search.gif" onclick="do_search('voucherInfo','<%=basePath %>/voucherInfoSearch.action');"/>
            </p>
         </div>
        </div>
               
             <s:if test="#request.voucherInfoSearchList!=null"> 
        <script>tab('tabId3','tabC3');show_div('voucherInfoId');hidden_div('merchandiseInfoId');hidden_div('movementInfoId');</script>

      <div class="col-right-title c-r-orange"><span>优惠券列表</span></div>
      <div class="col-right-ctn">
        <div class="clear"></div>
        <div class="table-data">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <th>优惠券编号</th>
              <th>优惠券内容</th>
              <th>开始时间</th>
              <th>结束时间</th>
              <th>所属商家</th>
            </tr>
           <s:iterator id="voucherInfo" value="voucherInfoSearchList" status="st">
            <tr>	
              <td><s:property value="voucher_no"/></td>
              <td><s:property value="voucher_content"/></td>
              <td><s:property value="begin_time"/></td>
              <td><s:property value="end_time"/></td>
              <td><s:property value="corpInfo.corp_name"/></td>
            </tr>
            </s:iterator>
          </table>
          <div class="next-pages">
            <app:pageController name="pageController" form="voucherInfo" />    
          </div>
     </div>
    </div>
    </s:if> 
      </div>
    </form>
    </div>
</div>
<div class="footer">
  <p>版权所有 (c) 2009 中国移动通信集团山西分公司</p>
</div>
</div>
</body>
</html>
   