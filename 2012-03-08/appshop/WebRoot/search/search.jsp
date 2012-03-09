<%@ page contentType="text/html; charset=GBK"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@ include file="/common/basePath.jsp"%>
<%@taglib prefix="app" uri="/tags/app"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>����ͨ�����б�</title>
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
      <div class="col-right-title c-r-blue"><span>�߼�����</span></div>
      <div class="col-right-ctn">
        <div id="getId">
          <ul id="tabtag">
            <li id="tabId1" class="tab_on" onclick="tab('tabId1','tabC1');show_div('merchandiseInfoId');hidden_div('movementInfoId');hidden_div('voucherInfoId');"><a href="javascript:void(0)" onfocus="blur()">��Ʒ</a></li>
            <li id="tabId2" onclick="tab('tabId2','tabC2');show_div('movementInfoId');hidden_div('merchandiseInfoId');hidden_div('voucherInfoId');" ><a href="javascript:void(0)" onfocus="blur()">�</a></li>
            <li id="tabId3" onclick="tab('tabId3','tabC3');show_div('voucherInfoId');hidden_div('merchandiseInfoId');hidden_div('movementInfoId');" ><a href="javascript:void(0)" onfocus="blur()">�Ż�ȯ</a></li>
          </ul>
        </div>
      </div>
       
   <form name="merchandiseInfo" action="merchandiseInfoSearch.action" method="post">
    <div id="merchandiseInfoId" style="display:;" class="col-right-ctn">
           <div  class="show" id="tabC1">
          <div class="table-form">
              <table cellpadding="0" cellspacing="0">
              <caption>
                ��д��ѯ����:
              </caption>
              <tr>
                <th>���ƣ�</th>
                <td><input type="text"  name="name" value="<s:property value="queryBean.name"/>" class="input-text" /></td>
              </tr>
              <tr>
                <th>�۸�</th>
                <td><input type="text"  name="begin_price" value="<s:property value="queryBean.begin_price"/>" class="input-text" />��<input type="text"  name="end_price" value="<s:property value="queryBean.end_price"/>" class="input-text" /></td>
              </tr>
               <tr>
                <th>�����̻���</th>
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
      <div class="col-right-title c-r-orange"><span>��Ʒ�б�</span></div>
      <div class="col-right-ctn">
        <div class="clear"></div>
        <div class="table-data">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <th>��Ʒ����</th>
              <th>��ƷͼƬ</th>
              <th>�۸�</th>
              <th>����</th>
              <th>�����̼�</th>
            </tr>
           <s:iterator id="merchandiseInfo" value="merchandiseInfoSearchList" status="st">
            <tr>	
              <td><s:property value="name"/></td>
              <td><a href="#"><img src="<%=imgPath %>/<s:property value="icon"/>" /></a></td>
              <td><span><b>��<s:property value="current_price"/>Ԫ</b></span></td>
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
                ��д��ѯ����:
              </caption>
              <tr>
                <th>���⣺</th>
                <td><input type="text"  name="mname" value="<s:property value="queryBean.name"/>" class="input-text" /></td>
              </tr>
               <tr>
                <th>�����̻���</th>
                <td><input type="text"  name="mcorp_name" value="<s:property value="queryBean.corp_name"/>" class="input-text" /></td>
              </tr>
              <tr>
                <th>�ʱ�䣺</th>
                <td><input type="text"  name="mbegin_time" value="<s:property value="queryBean.begin_time"/>" class="input-text" />��<input type="text"  name="mend_time" value="<s:property value="queryBean.end_time"/>" class="input-text" /></td>
              </tr>
            </table>
            <p align="center">
              <input type="image" src="<%=basePath %>/nresources/images/btn-search.gif" onclick="do_search('movementInfo','<%=basePath %>/movementInfoSearch.action');"/>
            </p>
         </div>
        </div>
       <s:if test="#request.movementInfoSearchList!=null"> 
        <script>tab('tabId2','tabC2');show_div('movementInfoId');hidden_div('merchandiseInfoId');hidden_div('voucherInfoId');</script>
      <div class="col-right-title c-r-orange"><span>��б�</span></div>
      <div class="col-right-ctn">
        <div class="clear"></div>
        <div class="table-data">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <th>����</th>
              <th>����</th>
              <th>��ʼ����</th>
              <th>��������</th>
              <th>�����̼�</th>
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
                ��д��ѯ����:
              </caption>
              <tr>
                <th>�Ż�ȯ�ţ�</th>
                <td><input type="text"  name="vno" value="<s:property value="queryBean.no"/>" class="input-text" /></td>
              </tr>
              <tr>
                <th>�����̻���</th>
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

      <div class="col-right-title c-r-orange"><span>�Ż�ȯ�б�</span></div>
      <div class="col-right-ctn">
        <div class="clear"></div>
        <div class="table-data">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <th>�Ż�ȯ���</th>
              <th>�Ż�ȯ����</th>
              <th>��ʼʱ��</th>
              <th>����ʱ��</th>
              <th>�����̼�</th>
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
  <p>��Ȩ���� (c) 2009 �й��ƶ�ͨ�ż���ɽ���ֹ�˾</p>
</div>
</div>
</body>
</html>
   