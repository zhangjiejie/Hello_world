<%@ page contentType="text/html; charset=GBK"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@ include file="/common/basePath.jsp"%>
<head>
	<link href="nresources/css/layout.css" rel="stylesheet" type="text/css" />

	<script type="text/javascript" src="../njs/jquery/jquery-1.3.min.js"></script>
	<script type="text/javascript" src="../njs/framework.js"></script>
	<script type="text/javascript" src="../njs/tab.js"></script>

</head>

<div class="col-right-ctn" style="height:200px;">
	<div class="table-data" >
		<table cellpadding="0" cellspacing="0">
			<tr>
				<th>
					主题
				</th>
				<th>
					商户
				</th>
				<th>
					活动内容
				</th>
			</tr>
			<s:iterator id="MovementInfo" value="list" status="st">
				<tr>

					<td style="width: 100px" title="<s:property value="move_subject"/>">
						<span> <a
							href="<%=basePath%>/movementInfoDetail.action?id=<s:property value="id"/>"
							target="_blank"><s:property value="brief_move_subject" /> </a> </span>
					</td>

					<td style="width: 100px" title="<s:property value="corp_name"/>">
						<span><s:property value="brief_corp_name" /></span>
					</td>
					<td style="width: 350px" title="<s:property value="move_content"/>">
						<span><s:property value="brief_move_content" /> </span>
					</td>

				</tr>
			</s:iterator>
		</table>
	</div>
</div>