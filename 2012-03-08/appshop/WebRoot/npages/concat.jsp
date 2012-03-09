<%@ page contentType="text/html; charset=GBK"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@ include file="/common/basePath.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>联系我们</title>
		<link href="../nresources/css/layout.css" rel="stylesheet"
			type="text/css" />
		<style type="text/css">
</style>
		<script type="text/javascript" src="../njs/jquery/jquery-1.3.min.js"></script>
		<script type="text/javascript" src="../njs/framework.js"></script>
		<script type="text/javascript" src="../njs/tab.js"></script>
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
				<a href="#">首页</a> >
				<a href="#">帮助中心</a>
			</div>
			<div class="col-left">
				<div class="col-left-title c-l-orange">
					商户排名
				</div>
				<div class="col-left-ctn pd0">
					<div class="sb-menu-til">
						<span><a href="#"><img
									src="../nresources/images/icon-new/icon-01.gif" width="10"
									height="10" />商户名称</a>
						</span>
					</div>
					<div class="sb-menu-til bg">
						<span><a href="#"><img
									src="../nresources/images/icon-new/icon-01.gif" alt=""
									width="10" height="10" />商户名称</a>
						</span>
					</div>
					<div class="sb-menu-til">
						<span><a href="#"><img
									src="../nresources/images/icon-new/icon-01.gif" alt=""
									width="10" height="10" />商户名称</a>
						</span>
					</div>
					<div class="sb-menu-til bg">
						<span><a href="#"><img
									src="../nresources/images/icon-new/icon-02.gif" alt=""
									width="10" height="10" />商户名称</a>
						</span>
					</div>
					<div class="sb-menu-til">
						<span><a href="#"><img
									src="../nresources/images/icon-new/icon-02.gif" alt=""
									width="10" height="10" />商户名称</a>
						</span>
					</div>
					<div class="sb-menu-til bg">
						<span><a href="#"><img
									src="../nresources/images/icon-new/icon-02.gif" alt=""
									width="10" height="10" />商户名称</a>
						</span>
					</div>
					<div class="sb-menu-til">
						<span><a href="#"><img
									src="../nresources/images/icon-new/icon-02.gif" alt=""
									width="10" height="10" />商户名称</a>
						</span>
					</div>
					<div class="sb-menu-til bg">
						<span><a href="#"><img
									src="../nresources/images/icon-new/icon-02.gif" alt=""
									width="10" height="10" />商户名称</a>
						</span>
					</div>
					<div class="sb-menu-til">
						<span><a href="#"><img
									src="../nresources/images/icon-new/icon-02.gif" alt=""
									width="10" height="10" />商户名称</a>
						</span>
					</div>
					<div class="sb-menu-til bg">
						<span><a href="#"><img
									src="../nresources/images/icon-new/icon-02.gif" alt=""
									width="10" height="10" />商户名称</a>
						</span>
					</div>
					<div class="sb-menu-til">
						<span><a href="#" class="btn-more">更多</a>
						</span>
					</div>
				</div>
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
				<div class="col-left-title c-l-pink">
					客户服务
				</div>
				<div class="col-left-ctn" style="padding: 0;">
					<ul class="customer-service">
						<li>
							<img src="../nresources/images/icon-deliver.gif" />
							<span>发货时间:<b>09:00-18:00</b>
							</span>
						</li>
						<li>
							<img src="../nresources/images/icon-cell.gif" />
							<span>e购热线:<b>400-000-0000</b>
							</span>
						</li>
						<li style="border-bottom: none;">
							<img src="../nresources/images/icon-time.gif" />
							<span>客服值班时间:<b>09:00-18:00</b>
							</span>
						</li>
					</ul>
				</div>
				<div class="col-left-title c-l-blue">
					帮助中心
				</div>
				<div class="col-left-ctn">
					<ul class="help-center">
						<li>
							<a href="#"><img src="../nresources/images/help1.gif" />如何订购</a>
						</li>
						<li>
							<a href="#"><img src="../nresources/images/help2.gif" />如何优惠</a>
						</li>
						<li>
							<a href="#"><img src="../nresources/images/help3.gif" />售后服务</a>
						</li>
						<li>
							<a href="#"><img src="../nresources/images/help4.gif" />付款方式</a>
						</li>
						<li>
							<a href="#"><img src="../nresources/images/help1.gif" />图标待定</a>
						</li>
						<li>
							<a href="#"><img src="../nresources/images/help2.gif" />图标待定</a>
						</li>
						<div class="clear"></div>
					</ul>
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
					<div class="hidden" id="tabC2">
						<div class="product-text">
							<h1>
								成交记录
								<b class="orange">（最近一个月成交记录）</b>
							</h1>

							<div class="table-data">
								<table cellpadding="0" cellspacing="0" width="100%">
									<tr>
										<th>
											买家
										</th>
										<th>
											宝贝名称
										</th>
										<th>
											出价
										</th>
										<th>
											购买数量
										</th>
										<th>
											付款时间
										</th>
										<th>
											状态
										</th>
									</tr>
									<tr>
										<td>
											<a href="#">买主用户名</a>
										</td>
										<td>
											诺基亚-1681cc
										</td>
										<td>
											<span><b>￥1850元</b>
											</span>
										</td>
										<td>
											<span>1</span>
										</td>
										<td>
											<span>2009-06-29 22:36:27</span>
										</td>
										<td>
											<span><b>成交</b>
											</span>
										</td>
									</tr>
									<tr class="zebra">
										<td>
											<a href="#">买主用户名</a>
										</td>
										<td>
											诺基亚-1681cc
										</td>
										<td>
											<span><b>￥1850元</b>
											</span>
										</td>
										<td>
											<span>1</span>
										</td>
										<td>
											<span>2009-06-29 22:36:27</span>
										</td>
										<td>
											<span><b>成交</b>
											</span>
										</td>
									</tr>
									<tr>
										<td>
											<a href="#">买主用户名</a>
										</td>
										<td>
											诺基亚-1681cc
										</td>
										<td>
											<span><b>￥1850元</b>
											</span>
										</td>
										<td>
											<span>1</span>
										</td>
										<td>
											<span>2009-06-29 22:36:27</span>
										</td>
										<td>
											<span><b>成交</b>
											</span>
										</td>
									</tr>
									<tr class="zebra">
										<td>
											<a href="#">买主用户名</a>
										</td>
										<td>
											诺基亚-1681cc
										</td>
										<td>
											<span><b>￥1850元</b>
											</span>
										</td>
										<td>
											<span>1</span>
										</td>
										<td>
											<span>2009-06-29 22:36:27</span>
										</td>
										<td>
											<span><b>成交</b>
											</span>
										</td>
									</tr>
									<tr>
										<td>
											<a href="#">买主用户名</a>
										</td>
										<td>
											诺基亚-1681cc
										</td>
										<td>
											<span><b>￥1850元</b>
											</span>
										</td>
										<td>
											<span>1</span>
										</td>
										<td>
											<span>2009-06-29 22:36:27</span>
										</td>
										<td>
											<span><b>成交</b>
											</span>
										</td>
									</tr>
									<tr class="zebra">
										<td>
											<a href="#">买主用户名</a>
										</td>
										<td>
											诺基亚-1681cc
										</td>
										<td>
											<span><b>￥1850元</b>
											</span>
										</td>
										<td>
											<span>1</span>
										</td>
										<td>
											<span>2009-06-29 22:36:27</span>
										</td>
										<td>
											<span><b>成交</b>
											</span>
										</td>
									</tr>
									<tr>
										<td>
											<a href="#">买主用户名</a>
										</td>
										<td>
											诺基亚-1681cc
										</td>
										<td>
											<span><b>￥1850元</b>
											</span>
										</td>
										<td>
											<span>1</span>
										</td>
										<td>
											<span>2009-06-29 22:36:27</span>
										</td>
										<td>
											<span><b>成交</b>
											</span>
										</td>
									</tr>
									<tr class="zebra">
										<td>
											<a href="#">买主用户名</a>
										</td>
										<td>
											诺基亚-1681cc
										</td>
										<td>
											<span><b>￥1850元</b>
											</span>
										</td>
										<td>
											<span>1</span>
										</td>
										<td>
											<span>2009-06-29 22:36:27</span>
										</td>
										<td>
											<span><b>成交</b>
											</span>
										</td>
									</tr>
								</table>
							</div>
						</div>

					</div>
					<div class="hidden" id="tabC3">
						<div class="rate-summary">
							<div class="rate-left">
								<table border="0" width="120">
									<tr>
										<td colspan="2">
											<b>宝贝与描述相符</b>
										</td>
									</tr>
									<tr class="pd10">
										<td width="36">
											<span><font class="bigscore">4.9</font>分</span>
										</td>
										<td width="60">
											<u><big class="stars"><em></em>
											</big>
											</u>
										</td>
									</tr>
									<tr>
										<td colspan="2">
											(共打分
											<font class="colorfda600">31</font>次)
										</td>
									</tr>
								</table>


							</div>
							<div class="score">
								<div class="abslt">
									4.5分
								</div>
							</div>
							<div class="rate-right">
								<ul>
									<li class="pleft57">
										非常不满
									</li>
									<li class="pleft30">
										不满意
									</li>
									<li class="pleft44">
										一般
									</li>
									<li class="pleft51">
										满意
									</li>
									<li class="pleft10">
										非常满意
									</li>
								</ul>
							</div>
						</div>
						<div class="table-data">
							<table cellpadding="0" cellspacing="0" width="100%">
								<tr>
									<th style="width: 80%">
										评论
									</th>
									<th>
										评论人
									</th>
								</tr>
								<tr>
									<td>
										<p class="grey">
											还没有用，因为是当月开通当月生效。所以明天再用。送货速度比较快，而且买的东西很心仪。谢谢啦。
										</p>
										<small>[2009-06-28 21:24:21]</small>
									</td>
									<td>
										<a href="#">yanwusanpi</a>
									</td>
								</tr>
								<tr>
									<td>
										<p class="grey">
											还没有用，因为是当月开通当月生效。所以明天再用。送货速度比较快，而且买的东西很心仪。谢谢啦。
										</p>
										<small>[2009-06-28 21:24:21]</small>
									</td>
									<td>
										<a href="#">yanwusanpi</a>
									</td>
								</tr>
								<tr>
									<td>
										<p class="grey">
											还没有用，因为是当月开通当月生效。所以明天再用。送货速度比较快，而且买的东西很心仪。谢谢啦。
										</p>
										<small>[2009-06-28 21:24:21]</small>
									</td>
									<td>
										<a href="#">yanwusanpi</a>
									</td>
								</tr>
								<tr>
									<td>
										<p class="grey">
											还没有用，因为是当月开通当月生效。所以明天再用。送货速度比较快，而且买的东西很心仪。谢谢啦。
										</p>
										<small>[2009-06-28 21:24:21]</small>
									</td>
									<td>
										<a href="#">yanwusanpi</a>
									</td>
								</tr>
								<tr>
									<td>
										<p class="grey">
											还没有用，因为是当月开通当月生效。所以明天再用。送货速度比较快，而且买的东西很心仪。谢谢啦。
										</p>
										<small>[2009-06-28 21:24:21]</small>
									</td>
									<td>
										<a href="#">yanwusanpi</a>
									</td>
								</tr>
								<tr>
									<td>
										<p class="grey">
											还没有用，因为是当月开通当月生效。所以明天再用。送货速度比较快，而且买的东西很心仪。谢谢啦。
										</p>
										<small>[2009-06-28 21:24:21]</small>
									</td>
									<td>
										<a href="#">yanwusanpi</a>
									</td>
								</tr>
							</table>
						</div>

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
					<div class="hidden" id="tabC2">
						<div class="product-text">
							<h1>
								成交记录
								<b class="orange">（最近一个月成交记录）</b>
							</h1>

							<div class="table-data">
								<table cellpadding="0" cellspacing="0" width="100%">
									<tr>
										<th>
											买家
										</th>
										<th>
											宝贝名称
										</th>
										<th>
											出价
										</th>
										<th>
											购买数量
										</th>
										<th>
											付款时间
										</th>
										<th>
											状态
										</th>
									</tr>
									<tr>
										<td>
											<a href="#">买主用户名</a>
										</td>
										<td>
											诺基亚-1681cc
										</td>
										<td>
											<span><b>￥1850元</b>
											</span>
										</td>
										<td>
											<span>1</span>
										</td>
										<td>
											<span>2009-06-29 22:36:27</span>
										</td>
										<td>
											<span><b>成交</b>
											</span>
										</td>
									</tr>
									<tr class="zebra">
										<td>
											<a href="#">买主用户名</a>
										</td>
										<td>
											诺基亚-1681cc
										</td>
										<td>
											<span><b>￥1850元</b>
											</span>
										</td>
										<td>
											<span>1</span>
										</td>
										<td>
											<span>2009-06-29 22:36:27</span>
										</td>
										<td>
											<span><b>成交</b>
											</span>
										</td>
									</tr>
									<tr>
										<td>
											<a href="#">买主用户名</a>
										</td>
										<td>
											诺基亚-1681cc
										</td>
										<td>
											<span><b>￥1850元</b>
											</span>
										</td>
										<td>
											<span>1</span>
										</td>
										<td>
											<span>2009-06-29 22:36:27</span>
										</td>
										<td>
											<span><b>成交</b>
											</span>
										</td>
									</tr>
									<tr class="zebra">
										<td>
											<a href="#">买主用户名</a>
										</td>
										<td>
											诺基亚-1681cc
										</td>
										<td>
											<span><b>￥1850元</b>
											</span>
										</td>
										<td>
											<span>1</span>
										</td>
										<td>
											<span>2009-06-29 22:36:27</span>
										</td>
										<td>
											<span><b>成交</b>
											</span>
										</td>
									</tr>
									<tr>
										<td>
											<a href="#">买主用户名</a>
										</td>
										<td>
											诺基亚-1681cc
										</td>
										<td>
											<span><b>￥1850元</b>
											</span>
										</td>
										<td>
											<span>1</span>
										</td>
										<td>
											<span>2009-06-29 22:36:27</span>
										</td>
										<td>
											<span><b>成交</b>
											</span>
										</td>
									</tr>
									<tr class="zebra">
										<td>
											<a href="#">买主用户名</a>
										</td>
										<td>
											诺基亚-1681cc
										</td>
										<td>
											<span><b>￥1850元</b>
											</span>
										</td>
										<td>
											<span>1</span>
										</td>
										<td>
											<span>2009-06-29 22:36:27</span>
										</td>
										<td>
											<span><b>成交</b>
											</span>
										</td>
									</tr>
									<tr>
										<td>
											<a href="#">买主用户名</a>
										</td>
										<td>
											诺基亚-1681cc
										</td>
										<td>
											<span><b>￥1850元</b>
											</span>
										</td>
										<td>
											<span>1</span>
										</td>
										<td>
											<span>2009-06-29 22:36:27</span>
										</td>
										<td>
											<span><b>成交</b>
											</span>
										</td>
									</tr>
									<tr class="zebra">
										<td>
											<a href="#">买主用户名</a>
										</td>
										<td>
											诺基亚-1681cc
										</td>
										<td>
											<span><b>￥1850元</b>
											</span>
										</td>
										<td>
											<span>1</span>
										</td>
										<td>
											<span>2009-06-29 22:36:27</span>
										</td>
										<td>
											<span><b>成交</b>
											</span>
										</td>
									</tr>
								</table>
							</div>
						</div>

					</div>
					<div class="hidden" id="tabC3">
						<div class="rate-summary">
							<div class="rate-left">
								<table border="0" width="120">
									<tr>
										<td colspan="2">
											<b>宝贝与描述相符</b>
										</td>
									</tr>
									<tr class="pd10">
										<td width="36">
											<span><font class="bigscore">4.9</font>分</span>
										</td>
										<td width="60">
											<u><big class="stars"><em></em>
											</big>
											</u>
										</td>
									</tr>
									<tr>
										<td colspan="2">
											(共打分
											<font class="colorfda600">31</font>次)
										</td>
									</tr>
								</table>


							</div>
							<div class="score">
								<div class="abslt">
									4.5分
								</div>
							</div>
							<div class="rate-right">
								<ul>
									<li class="pleft57">
										非常不满
									</li>
									<li class="pleft30">
										不满意
									</li>
									<li class="pleft44">
										一般
									</li>
									<li class="pleft51">
										满意
									</li>
									<li class="pleft10">
										非常满意
									</li>
								</ul>
							</div>
						</div>
						<div class="table-data">
							<table cellpadding="0" cellspacing="0" width="100%">
								<tr>
									<th style="width: 80%">
										评论
									</th>
									<th>
										评论人
									</th>
								</tr>
								<tr>
									<td>
										<p class="grey">
											还没有用，因为是当月开通当月生效。所以明天再用。送货速度比较快，而且买的东西很心仪。谢谢啦。
										</p>
										<small>[2009-06-28 21:24:21]</small>
									</td>
									<td>
										<a href="#">yanwusanpi</a>
									</td>
								</tr>
								<tr>
									<td>
										<p class="grey">
											还没有用，因为是当月开通当月生效。所以明天再用。送货速度比较快，而且买的东西很心仪。谢谢啦。
										</p>
										<small>[2009-06-28 21:24:21]</small>
									</td>
									<td>
										<a href="#">yanwusanpi</a>
									</td>
								</tr>
								<tr>
									<td>
										<p class="grey">
											还没有用，因为是当月开通当月生效。所以明天再用。送货速度比较快，而且买的东西很心仪。谢谢啦。
										</p>
										<small>[2009-06-28 21:24:21]</small>
									</td>
									<td>
										<a href="#">yanwusanpi</a>
									</td>
								</tr>
								<tr>
									<td>
										<p class="grey">
											还没有用，因为是当月开通当月生效。所以明天再用。送货速度比较快，而且买的东西很心仪。谢谢啦。
										</p>
										<small>[2009-06-28 21:24:21]</small>
									</td>
									<td>
										<a href="#">yanwusanpi</a>
									</td>
								</tr>
								<tr>
									<td>
										<p class="grey">
											还没有用，因为是当月开通当月生效。所以明天再用。送货速度比较快，而且买的东西很心仪。谢谢啦。
										</p>
										<small>[2009-06-28 21:24:21]</small>
									</td>
									<td>
										<a href="#">yanwusanpi</a>
									</td>
								</tr>
								<tr>
									<td>
										<p class="grey">
											还没有用，因为是当月开通当月生效。所以明天再用。送货速度比较快，而且买的东西很心仪。谢谢啦。
										</p>
										<small>[2009-06-28 21:24:21]</small>
									</td>
									<td>
										<a href="#">yanwusanpi</a>
									</td>
								</tr>
							</table>
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