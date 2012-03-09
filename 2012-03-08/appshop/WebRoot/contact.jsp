<%@ page contentType="text/html; charset=GBK"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@ include file="/common/basePath.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>联系我们</title>
		<link href="<%=basePath %>/nresources/css/layout.css" rel="stylesheet"
			type="text/css" />
		<style type="text/css">
</style>
		<script type="text/javascript" src="<%=basePath %>/njs/jquery/jquery-1.3.min.js"></script>
		<script type="text/javascript" src="<%=basePath %>/njs/framework.js"></script>
		<script type="text/javascript" src="<%=basePath %>/njs/tab.js"></script>
		<script type="text/javascript">

$(function(){
	bigpic();
	vote_percent("3.4")
})
function vote_percent(x){
	var left=Math.round(398*x/5);
	$(".score .abslt").css("left",left);
	$(".score .abslt").html(x+"分");
	$(".bigscore").html(x);
	var left2=Math.round(60*x/5);
	$(".rate-left .stars em").css("width",left2);
}
</script>

	</head>

	<body>
		<div class="wrapper">
			<div class="top-banner">
				<div class="top-banner">
					<%@ include file="/common/top.jsp"%>
				</div>
			</div>
			<div class="bread-crumb">
				当前位置：
				<a href="index.jsp">首页</a> >
				<a href="contact.jsp">联系我们</a>
			</div>
			<div class="col-left">
				<div class="col-left-title c-l-orange">商户排名</div>
				 <iframe  align="top" id="ifram" frameborder="0" scrolling="no" src="voucherInfo.action" width="100%" height="280px"></iframe>
				
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
					联系我们
				</div>
				<div class="col-right-ctn">
					<div class="product-text">
						<h1>
							公司地址
						</h1>
						<p>
							地址内容地址内容地址内容地址内容地址内容地址内容地址内容地址内容地址内容地址内容地址内容地址内容地址内容地址内容
						</p>
						<br />
						<h1>
							邮政编码
						</h1>
						<p>
							100000
						</p>
						<br />
						<h1>
							联系电话
						</h1>
						<p>
							86688688
						</p>
						<br />
						<h1>
							电子邮箱
						</h1>
						<p>
							aaaaaaaa@wwdsdaad.com
						</p>
					</div>
				</div>
				<div class="col-right-title c-r-green">
					客户服务
				</div>
				<div class="col-right-ctn">
					<div class="product-text">
						<h1>
							24小时热线
						</h1>
						<p>
							400-000-0000
						</p>
						<br />
						<h1>
							客服邮箱
						</h1>
						<p>
							aaaaaaaa@wwdsdaad.com
						</p>
						<br />
						<h1>
							其他方式
						</h1>
						<p>
							11244545677
						</p>
					</div>
               </div>
			</div>
			</div>
			</div>
		<div class="footer">
			<p>
				版权所有 (c) 2009 中国移动通信集团山西分公司
			</p>
		</div>
	</body>
</html>