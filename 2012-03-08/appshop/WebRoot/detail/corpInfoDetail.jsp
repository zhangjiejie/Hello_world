<%@ page contentType="text/html; charset=GBK"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@ include file="/common/basePath.jsp"%>
<%@taglib prefix="app" uri="/tags/app"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>�̻���ϸ��Ϣ</title>
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
        
    <div class="col-right-title c-r-blue">�̻�����</div>
        <div class="col-right-ctn">
        	<h6><s:property value="merchandiseInfo.name"/></h6>
        	<div class="product-detail">
            	<div class="detail-wrap">
					<table>
                    	<caption><s:property value="merchandiseInfo.name"/></caption>
                    	<tr>
                        	<th>�̻����ƣ�</th>
                            <td><s:property value="corpInfo.corp_name" /></td>
                        </tr>
                        <tr>
                        	<th>�̻���ַ</th>
                            <td><s:property value="corpInfo.corp_address" /></td>
                        </tr>
                        <tr>
                        	<th>��ϵ�绰��</th>
                            <td><s:property value="corpInfo.corp_phone" /></td>
                        </tr>
                        <tr>
                        	<th>�ȡ�������</th>
                            <td><big class="stars stars<s:property value="corp_level"/>"><em></em></big></td>
                        </tr>
                    </table>
                </div>
            </div>
       
    	<div class="col-right-title c-r-purple"><span>������Ʒ</span><a href="<%=basePath %>/merchandiseInfolist.action?corp_no=<s:property value="corpInfo.login_no" />" class="btn-more">����</a></div>
        <!-- ������Ʒ -->
         <iframe  align="top" id="ifram" frameborder="0" scrolling="no" src="merchandiseInfo.action?corp_no=<s:property value="corpInfo.login_no" />"  width="100%" height="150px"></iframe>
        
        <div id="ad-flash">
				<script type="text/javascript" src="<%=basePath %>/njs/scrolls.js"></script>
	     </div>
    <div class="col-right-title c-r-blue"><span>�Ƽ��Ż�ȯ</span><a href="voucherInforecommendedList.action?corp_no=<s:property value="corpInfo.login_no" />" class="btn-more">����</a></div>
    <iframe  align="top" id="ifram" frameborder="0" scrolling="no" src="voucherInforecommended.action?corp_no=<s:property value="corpInfo.login_no" />"  width="100%" height="150px"></iframe>
    
     <div class="col-right-title c-r-orange"><span>���»</span><a href="<%=basePath %>/movementInfoList.action?corp_no=<s:property value="corpInfo.login_no" />" class="btn-more">����</a></div>
     <iframe  align="top" id="ifram" frameborder="0" scrolling="no" src="movementInfo.action?corp_no=<s:property value="corpInfo.login_no" />"  width="100%" height="150px"></iframe>
        
  </div>
  </div>
</div>
<div class="footer">
  <p>��Ȩ���� (c) 2009 �й��ƶ�ͨ�ż���ɽ���ֹ�˾</p>
</div>
</body>
</html>