<%@ page contentType="text/html; charset=GBK"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@ include file="/common/basePath.jsp"%>
<link href="nresources/css/layout.css" rel="stylesheet" type="text/css" />
<!-- �̻��Ƽ� -->
     <div  class="col-right-ctn">

            <div class="table-data" style="height:220px;">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <th>�̻�����</th>
              <th>�̻���ַ</th>
              <th>�̻��绰</th>
              <th>�̻�����</th>
            </tr>
              <s:iterator id="corpInfo" value="list" status="st">
            <tr>
              <td><a href="<%=basePath%>/corpInfoDetail.action?corp_id=<s:property value="id"/>" target="_blank" ><s:property value="corp_name"/></a></td>
              <td> <s:property value="corp_address"/></td>
              <td> <s:property value="corp_phone"/><s:property value="corp_level"/></td>
              <td ><big class="stars stars<s:property value="corp_level"/>"><em></em></big></td>  
            </tr>
            </s:iterator>
          </table>
        </div>
            
            
          <div class="clear"></div>
			
    </div>