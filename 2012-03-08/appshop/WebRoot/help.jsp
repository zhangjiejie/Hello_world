<%@ page contentType="text/html; charset=GBK"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@ include file="/common/basePath.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>帮助中心</title>
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
				<%@ include file="/common/top.jsp"%>
			</div>
			<div class="bread-crumb">
				当前位置：
				<a href="index.jsp">首页</a> >
				<a href="help.jsp">帮助中心</a>
			</div>
			<div class="col-left">
				<div class="col-left-title c-l-orange">
					帮助分类
				</div>
				<div class="col-left-ctn pd0">
					<div class="sb-menu-til">
						<span><a href="#">如何订购 >></a>
						</span>
					</div>
					<div class="sb-menu-til bg">
						<span><a href="#">如何下载 >></a>
						</span>
					</div>
				</div>
		       
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
					帮助中心
				</div>
				<div class="col-right-ctn">
					<h6>
						如何订购
					</h6>
					<div class="product-text">
						<span class="question">如何开通个人版商易通业务？</span>
						<span class="answer">手机发送SYT到10658673114开通个人版商易通业务。（使用短信发送）</span>
						<span class="question">如何退订商易通业务？</span>
						<span class="answer">手机发送TDSYT到10658673114退订已订购的商易通业务（使用短信发送）。</span>
					</div>
					<h6>
						如何下载
					</h6>
					<div class="product-text">
						<span class="question">如何下载优惠券？</span>
						<span class="answer">通过浏览优惠券列表的下载方式，找到所要下发的优惠券，然后通过“下载提示”进行下载，也可以通过拨打12580进行下载</span>
						<span class="question">如何消费？</span>
						<span class="answer">持下载的电子优惠券到指定的商家处消费即可享受优惠券所显示的折扣。.</span>
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
