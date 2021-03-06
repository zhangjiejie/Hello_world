<%@ page contentType="text/html; charset=GBK"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@ include file="/common/basePath.jsp"%>
<%@taglib prefix="app" uri="/tags/app"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>活动详情</title>
		<link href="<%=basePath%>/nresources/css/layout.css" rel="stylesheet"
			type="text/css" />
		<script type="text/javascript"
			src="<%=basePath%>/njs/jquery/jquery-1.3.min.js"></script>
		<script type="text/javascript" src="<%=basePath%>/njs/framework.js"></script>
	</head>

	<body>
		<div class="wrapper">
			<div class="top-banner">
				<%@ include file="/common/top.jsp"%>
			</div>

			<div class="col-left">
				<div class="col-left-title c-l-orange">
					商户排名
				</div>
				<iframe align="top" id="ifram" frameborder="0" scrolling="no"
					src="<%=basePath%>/voucherInfo.action" width="100%" height="280px"></iframe>
				<!--  
				<div class="col-left-title c-l-green">
					公告信息
				</div>
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

				<div class="col-right-title c-r-blue">
					活动描述
				</div>
				<div class="col-right-ctn">
					<h6>
						<s:property value="merchandiseInfo.name" />
					</h6>

					<div class="product-text">
						<h1>
							活动介绍
						</h1>
						<table cellpadding="0" cellspacing="0">
							<tr>
								<th>
									主 题：
								</th>
								<td>
									<s:property value="movementInfo.move_subject" />
								</td>
							</tr>
							<tr>
								<th>
									商 家：
								</th>
								<td>
									<s:property value="movementInfo.corp_name" />
								</td>
							</tr>

							<tr>
								<th>
									开始时间：
								</th>
								<td>
									<s:date name="movementInfo.begin_time" format="yyyy年MM月dd日" />
								</td>
							</tr>
							<tr>
								<th>
									结束时间：
								</th>
								<td>
									<s:date name="movementInfo.end_time" format="yyyy年MM月dd日" />
								</td>
							</tr>
							<tr>
								<th>
									内 容：
								</th>
								<td>
									<s:property value="movementInfo.move_content" />
								</td>
							</tr>

						</table>
					</div>
				</div>


				<div class="col-right-title c-r-purple">
					<span>最新商品</span><a href="<%=basePath%>/merchandiseInfolist.action"
						class="btn-more">更多</a>
				</div>
				<!-- 最新商品 -->
				<iframe align="top" id="ifram" frameborder="0" scrolling="no"
					src="merchandiseInfo.action" width="100%" height="150px"></iframe>


				<div class="col-right-title c-r-orange">
					<span>推荐商户</span><a href="#" class="btn-more">更多</a>
				</div>

				<iframe align="top" id="ifram" frameborder="0" scrolling="no"
					src="corpinforecommend.action" width="100%" height="150px"></iframe>

				<div class="col-right-title c-r-blue">
					<span>推荐优惠券</span><a href="#" class="btn-more">更多</a>
				</div>
				<iframe align="top" id="ifram" frameborder="0" scrolling="no"
					src="voucherInforecommended.action" width="100%" height="100%"></iframe>
			</div>
		</div>
		<div class="footer">
			<p>
				版权所有 (c) 2009 中国移动通信集团山西分公司
			</p>

		</div>
	</body>
</html>