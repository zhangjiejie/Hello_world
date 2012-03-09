<%@ page contentType="text/html; charset=GBK"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@ include file="/common/basePath.jsp"%>
<link href="<%=basePath %>/nresources/css/layout.css" rel="stylesheet" type="text/css" />
<!-- 优惠券推荐 -->
   <div class="col-right-ctn" style="height:290px;">
        <div class="clear"></div>
         <div class="table-data">
          <table cellpadding="0" cellspacing="0" >
            <tr>
              <th>所属商户</th>
              <th>优惠券内容</th>
              <th>下载方式</th>
            </tr>
             <s:iterator id="voucherInfo" value="list" status="st">
	          <tr>
	                <td><a href="corpInfoDetail.action?corp_id=<s:property value="corpInfo.id"/>" target="_blank"><s:property value="corpInfo.corp_name"/></a></td>
	                <td><s:property value="voucher_content"/></td>
	                <td><%=cmd_id%><s:property value="id"/><%=cmd_no %></td>
	          </tr>
             </s:iterator>
          </table>
        </div>
      <div class="clear"></div>	
   </div>