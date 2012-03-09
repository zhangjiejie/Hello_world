<%@ page contentType="text/html; charset=GBK"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@ include file="/common/basePath.jsp"%>
<%@taglib prefix="app" uri="/tags/app"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>����ͨ��Ʒ�б�</title>
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
      <div class="col-left-title c-l-orange">�̻�����</div>
       <iframe  align="top" id="ifram" frameborder="0" scrolling="no" src="<%=basePath%>/movementInfoList.action" width="100%" height="100%"></iframe>

        <div class="col-left-title c-l-green">������Ϣ</div>
        <div class="col-left-ctn">
			<div>
        	<p class="bulletin">
            <a>�����������ͳ�ֵ���ѣ�ɽ���ƶ�����ͨ����ֵ�Żݣ���ֵ��������������ͳ�ֵ���ѣ�ɽ���ƶ�����ͨ����ֵ�Żݣ���ֵ���</a>
            </p>
			</div>
        </div>
        
        <div class="col-left-title c-l-pink">�ͻ�����</div>
        <div class="col-left-ctn" style="padding:0;">
        	<ul class="customer-service">
            	<li><img src="<%=basePath %>/nresources/images/icon-deliver.gif" /><span>����ʱ��:<b>09:00-18:00</b></span></li>
                <li><img src="<%=basePath %>/nresources/images/icon-cell.gif" /><span>e������:<b>400-000-0000</b></span></li>
                <li style="border-bottom:none;"><img src="<%=basePath %>/nresources/images/icon-time.gif" /><span>�ͷ�ֵ��ʱ��:<b>09:00-18:00</b></span></li>
                
            </ul>
        </div>
        
        
        <div class="col-left-title c-l-blue">��������</div>
 		<div class="col-left-ctn">
        	<ul class="help-center">
            	<li><a href="#"><img src="<%=basePath %>/nresources/images/help1.gif" />��ζ���</a></li>
                <li><a href="#"><img src="<%=basePath %>/nresources/images/help2.gif" />����Ż�</a></li>
                <li><a href="#"><img src="<%=basePath %>/nresources/images/help3.gif" />�ۺ����</a></li>
                <li><a href="#"><img src="<%=basePath %>/nresources/images/help4.gif" />���ʽ</a></li>
                <li><a href="#"><img src="<%=basePath %>/nresources/images/help1.gif" />ͼ�����</a></li>
                <li><a href="#"><img src="<%=basePath %>/nresources/images/help2.gif" />ͼ�����</a></li>
            </ul>
             <div class="clear"></div>
        </div>
    </div>
    
    <div class="col-right">
      <div class="col-right-title c-r-blue"><span>��Ʒ�б�</span>
            <p><span>����ʽ��</span><a href="#" class="btn-down">����</a><a href="#" class="btn-up">����</a></p>
        </div>
        <form name="merchandiseForm" action="<%=basePath%>/merchandiseInfolist.action">
        <div class="col-right-ctn">
        	<ul class="product-list">
        	   <s:iterator id="merchandiseInfo" value="list">
            	 <li>
                	 <a href="#"><span><img src="<%=imgPath%>/<s:property value="icon"/>" /></span><p><s:property value="name"/></p><b>�ػݼ�:��<s:property value="current_price"/>Ԫ</b></a>   
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
  <p>��Ȩ���� (c) 2009 �й��ƶ�ͨ�ż���ɽ���ֹ�˾</p>
</div>
</body>
</html>
   