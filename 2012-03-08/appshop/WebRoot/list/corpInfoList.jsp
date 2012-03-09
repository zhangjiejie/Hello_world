<%@ page contentType="text/html; charset=GBK"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@ include file="/common/basePath.jsp"%>
<%@taglib prefix="app" uri="/tags/app"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>����ͨ�̻��б�</title>
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
       <iframe  align="top" id="ifram" frameborder="0" scrolling="no" src="<%=basePath%>/voucherInfo.action" width="100%" height="280px"></iframe>
		<!--
        <div class="col-left-title c-l-green">������Ϣ</div>
        <div class="col-left-ctn">
			<div>
        	<p class="bulletin">
            <a>�����������ͳ�ֵ���ѣ�ɽ���ƶ�����ͨ����ֵ�Żݣ���ֵ��������������ͳ�ֵ���ѣ�ɽ���ƶ�����ͨ����ֵ�Żݣ���ֵ���</a>
            </p>
			</div>
        </div>
        -->
           <div class="col-left-title c-l-pink">�ͻ�����</div>
        <div class="col-left-ctn" style="padding:0;">
        	<ul class="customer-service">
            	<li><img src="<%=basePath %>/nresources/images/icon-deliver.gif" /><span>�ͷ��绰:<b>12580</b></span></li>
                <li style="border-bottom:none;"><img src="<%=basePath %>/nresources/images/icon-time.gif" /><span>�ͷ�ֵ��ʱ��:<b>ȫ��</b></span></li>
                
            </ul>
        </div>
        
        
        <div class="col-left-title c-l-blue">��������</div>
 		<div class="col-left-ctn">
        	<ul class="help-center">
            	<li><a href="<%=basePath %>/help.jsp"><img src="<%=basePath %>/nresources/images/help1.gif" />��ζ���</a></li>
                <li><a href="<%=basePath %>/help.jsp"><img src="<%=basePath %>/nresources/images/help2.gif" />�������</a></li>
            </ul>
             <div class="clear"></div>
        </div>
    </div>
    
    <div class="col-right">
      <div class="col-right-title c-r-blue"><span>�̻��б�</span></div>
        <div class="col-right-ctn">
              <form name="corpInfo" action="corpinforecommend.action">
               <div class="table-data" >
        	 <table  width="100%">
              <tr>
                    <th width="20%">�̻�����</th>
		            <th width="45%">�̻���ַ</th>
		            <th width="20%">�̻��绰</th>
		            <th width="15%">�̻�����</th>   
              </tr>
             <s:iterator id="corpInfo" value="list" status="st">
              <tr>
              	<s:url id="url" action="corpInfoDetail.action">
			         <s:param name="corp_id"><s:property value="id"/></s:param>
			    </s:url>
                 <td> <a href="<%=basePath%>/corpInfoDetail.action?corp_id=<s:property value="id"/>" target="_blank" ><s:property value="corp_name"/></a></td>
                 <td> <s:property value="corp_address"/></td>
                 <td> <s:property value="corp_phone"/><s:property value="corp_level"/></td>
                 <td ><big class="stars stars<s:property value="corp_level"/>"><em></em></big></td>
              </tr>
              </s:iterator>
            </table>
             </div>
            <div class="clear"></div>
            <div class="next-pages">
                  <app:pageController name="pageController" form="corpInfo" />     
             </div>
             </from>
        </div>
     
    </div>
</div>
<div class="footer">
  <p>��Ȩ���� (c) 2009 �й��ƶ�ͨ�ż���ɽ���ֹ�˾</p>
</div>
</body>
</html>
   