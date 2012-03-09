<%@ page contentType="text/html; charset=GBK"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@ include file="/common/basePath.jsp"%>
<link href="<%=basePath %>/nresources/css/layout.css" rel="stylesheet" type="text/css" />
<!-- ÉÌ»§ÅÅÃû -->
      <div class="col-left-ctn pd0" style="height:275px;">
          <div>&nbsp;</div>
          <s:iterator id="voucherInfo" value="list" status="st">
            	     <div class="sb-menu-til">
                   <span><a href="corpInfoDetail.action?corp_id=<s:property value="corpInfo.id"/>" target="_blank"><img src="<%=basePath %>/nresources/images/icon-new/icon-01.gif" width="10" height="10" /><s:property value="corpInfo.corp_name"/></a></span>
                  </div>
           </s:iterator>
         
      </div>