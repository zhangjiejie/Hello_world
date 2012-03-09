<%@ page contentType="text/html; charset=GBK"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@ include file="/common/basePath.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>��ϵ����</title>
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
	$(".score .abslt").html(x+"��");
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
				��ǰλ�ã�
				<a href="#">��ҳ</a> >
				<a href="#">��������</a>
			</div>
			<div class="col-left">
				<div class="col-left-title c-l-orange">
					�̻�����
				</div>
				<div class="col-left-ctn pd0">
					<div class="sb-menu-til">
						<span><a href="#"><img
									src="../nresources/images/icon-new/icon-01.gif" width="10"
									height="10" />�̻�����</a>
						</span>
					</div>
					<div class="sb-menu-til bg">
						<span><a href="#"><img
									src="../nresources/images/icon-new/icon-01.gif" alt=""
									width="10" height="10" />�̻�����</a>
						</span>
					</div>
					<div class="sb-menu-til">
						<span><a href="#"><img
									src="../nresources/images/icon-new/icon-01.gif" alt=""
									width="10" height="10" />�̻�����</a>
						</span>
					</div>
					<div class="sb-menu-til bg">
						<span><a href="#"><img
									src="../nresources/images/icon-new/icon-02.gif" alt=""
									width="10" height="10" />�̻�����</a>
						</span>
					</div>
					<div class="sb-menu-til">
						<span><a href="#"><img
									src="../nresources/images/icon-new/icon-02.gif" alt=""
									width="10" height="10" />�̻�����</a>
						</span>
					</div>
					<div class="sb-menu-til bg">
						<span><a href="#"><img
									src="../nresources/images/icon-new/icon-02.gif" alt=""
									width="10" height="10" />�̻�����</a>
						</span>
					</div>
					<div class="sb-menu-til">
						<span><a href="#"><img
									src="../nresources/images/icon-new/icon-02.gif" alt=""
									width="10" height="10" />�̻�����</a>
						</span>
					</div>
					<div class="sb-menu-til bg">
						<span><a href="#"><img
									src="../nresources/images/icon-new/icon-02.gif" alt=""
									width="10" height="10" />�̻�����</a>
						</span>
					</div>
					<div class="sb-menu-til">
						<span><a href="#"><img
									src="../nresources/images/icon-new/icon-02.gif" alt=""
									width="10" height="10" />�̻�����</a>
						</span>
					</div>
					<div class="sb-menu-til bg">
						<span><a href="#"><img
									src="../nresources/images/icon-new/icon-02.gif" alt=""
									width="10" height="10" />�̻�����</a>
						</span>
					</div>
					<div class="sb-menu-til">
						<span><a href="#" class="btn-more">����</a>
						</span>
					</div>
				</div>
				<div class="col-left-title c-l-green">
					������Ϣ
				</div>
				<div class="col-left-ctn">
					<div>
						<p class="bulletin">
							<a>�����������ͳ�ֵ���ѣ�ɽ���ƶ�����ͨ����ֵ�Żݣ���ֵ��������������ͳ�ֵ���ѣ�ɽ���ƶ�����ͨ����ֵ�Żݣ���ֵ���</a>
						</p>
					</div>
				</div>
				<div class="col-left-title c-l-pink">
					�ͻ�����
				</div>
				<div class="col-left-ctn" style="padding: 0;">
					<ul class="customer-service">
						<li>
							<img src="../nresources/images/icon-deliver.gif" />
							<span>����ʱ��:<b>09:00-18:00</b>
							</span>
						</li>
						<li>
							<img src="../nresources/images/icon-cell.gif" />
							<span>e������:<b>400-000-0000</b>
							</span>
						</li>
						<li style="border-bottom: none;">
							<img src="../nresources/images/icon-time.gif" />
							<span>�ͷ�ֵ��ʱ��:<b>09:00-18:00</b>
							</span>
						</li>
					</ul>
				</div>
				<div class="col-left-title c-l-blue">
					��������
				</div>
				<div class="col-left-ctn">
					<ul class="help-center">
						<li>
							<a href="#"><img src="../nresources/images/help1.gif" />��ζ���</a>
						</li>
						<li>
							<a href="#"><img src="../nresources/images/help2.gif" />����Ż�</a>
						</li>
						<li>
							<a href="#"><img src="../nresources/images/help3.gif" />�ۺ����</a>
						</li>
						<li>
							<a href="#"><img src="../nresources/images/help4.gif" />���ʽ</a>
						</li>
						<li>
							<a href="#"><img src="../nresources/images/help1.gif" />ͼ�����</a>
						</li>
						<li>
							<a href="#"><img src="../nresources/images/help2.gif" />ͼ�����</a>
						</li>
						<div class="clear"></div>
					</ul>
				</div>
			</div>
			<div class="col-right">

				<div class="col-right-title c-r-blue">
					��ϵ����
				</div>
				<div class="col-right-ctn">
					<div class="product-text">
						<h1>
							��˾��ַ
						</h1>
						<p>
							��ַ���ݵ�ַ���ݵ�ַ���ݵ�ַ���ݵ�ַ���ݵ�ַ���ݵ�ַ���ݵ�ַ���ݵ�ַ���ݵ�ַ���ݵ�ַ���ݵ�ַ���ݵ�ַ���ݵ�ַ����
						</p>
						<br />
						<h1>
							��������
						</h1>
						<p>
							100000
						</p>
						<br />
						<h1>
							��ϵ�绰
						</h1>
						<p>
							86688688
						</p>
						<br />
						<h1>
							��������
						</h1>
						<p>
							aaaaaaaa@wwdsdaad.com
						</p>
					</div>
					<div class="hidden" id="tabC2">
						<div class="product-text">
							<h1>
								�ɽ���¼
								<b class="orange">�����һ���³ɽ���¼��</b>
							</h1>

							<div class="table-data">
								<table cellpadding="0" cellspacing="0" width="100%">
									<tr>
										<th>
											���
										</th>
										<th>
											��������
										</th>
										<th>
											����
										</th>
										<th>
											��������
										</th>
										<th>
											����ʱ��
										</th>
										<th>
											״̬
										</th>
									</tr>
									<tr>
										<td>
											<a href="#">�����û���</a>
										</td>
										<td>
											ŵ����-1681cc
										</td>
										<td>
											<span><b>��1850Ԫ</b>
											</span>
										</td>
										<td>
											<span>1</span>
										</td>
										<td>
											<span>2009-06-29 22:36:27</span>
										</td>
										<td>
											<span><b>�ɽ�</b>
											</span>
										</td>
									</tr>
									<tr class="zebra">
										<td>
											<a href="#">�����û���</a>
										</td>
										<td>
											ŵ����-1681cc
										</td>
										<td>
											<span><b>��1850Ԫ</b>
											</span>
										</td>
										<td>
											<span>1</span>
										</td>
										<td>
											<span>2009-06-29 22:36:27</span>
										</td>
										<td>
											<span><b>�ɽ�</b>
											</span>
										</td>
									</tr>
									<tr>
										<td>
											<a href="#">�����û���</a>
										</td>
										<td>
											ŵ����-1681cc
										</td>
										<td>
											<span><b>��1850Ԫ</b>
											</span>
										</td>
										<td>
											<span>1</span>
										</td>
										<td>
											<span>2009-06-29 22:36:27</span>
										</td>
										<td>
											<span><b>�ɽ�</b>
											</span>
										</td>
									</tr>
									<tr class="zebra">
										<td>
											<a href="#">�����û���</a>
										</td>
										<td>
											ŵ����-1681cc
										</td>
										<td>
											<span><b>��1850Ԫ</b>
											</span>
										</td>
										<td>
											<span>1</span>
										</td>
										<td>
											<span>2009-06-29 22:36:27</span>
										</td>
										<td>
											<span><b>�ɽ�</b>
											</span>
										</td>
									</tr>
									<tr>
										<td>
											<a href="#">�����û���</a>
										</td>
										<td>
											ŵ����-1681cc
										</td>
										<td>
											<span><b>��1850Ԫ</b>
											</span>
										</td>
										<td>
											<span>1</span>
										</td>
										<td>
											<span>2009-06-29 22:36:27</span>
										</td>
										<td>
											<span><b>�ɽ�</b>
											</span>
										</td>
									</tr>
									<tr class="zebra">
										<td>
											<a href="#">�����û���</a>
										</td>
										<td>
											ŵ����-1681cc
										</td>
										<td>
											<span><b>��1850Ԫ</b>
											</span>
										</td>
										<td>
											<span>1</span>
										</td>
										<td>
											<span>2009-06-29 22:36:27</span>
										</td>
										<td>
											<span><b>�ɽ�</b>
											</span>
										</td>
									</tr>
									<tr>
										<td>
											<a href="#">�����û���</a>
										</td>
										<td>
											ŵ����-1681cc
										</td>
										<td>
											<span><b>��1850Ԫ</b>
											</span>
										</td>
										<td>
											<span>1</span>
										</td>
										<td>
											<span>2009-06-29 22:36:27</span>
										</td>
										<td>
											<span><b>�ɽ�</b>
											</span>
										</td>
									</tr>
									<tr class="zebra">
										<td>
											<a href="#">�����û���</a>
										</td>
										<td>
											ŵ����-1681cc
										</td>
										<td>
											<span><b>��1850Ԫ</b>
											</span>
										</td>
										<td>
											<span>1</span>
										</td>
										<td>
											<span>2009-06-29 22:36:27</span>
										</td>
										<td>
											<span><b>�ɽ�</b>
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
											<b>�������������</b>
										</td>
									</tr>
									<tr class="pd10">
										<td width="36">
											<span><font class="bigscore">4.9</font>��</span>
										</td>
										<td width="60">
											<u><big class="stars"><em></em>
											</big>
											</u>
										</td>
									</tr>
									<tr>
										<td colspan="2">
											(�����
											<font class="colorfda600">31</font>��)
										</td>
									</tr>
								</table>


							</div>
							<div class="score">
								<div class="abslt">
									4.5��
								</div>
							</div>
							<div class="rate-right">
								<ul>
									<li class="pleft57">
										�ǳ�����
									</li>
									<li class="pleft30">
										������
									</li>
									<li class="pleft44">
										һ��
									</li>
									<li class="pleft51">
										����
									</li>
									<li class="pleft10">
										�ǳ�����
									</li>
								</ul>
							</div>
						</div>
						<div class="table-data">
							<table cellpadding="0" cellspacing="0" width="100%">
								<tr>
									<th style="width: 80%">
										����
									</th>
									<th>
										������
									</th>
								</tr>
								<tr>
									<td>
										<p class="grey">
											��û���ã���Ϊ�ǵ��¿�ͨ������Ч�������������á��ͻ��ٶȱȽϿ죬������Ķ��������ǡ�лл����
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
											��û���ã���Ϊ�ǵ��¿�ͨ������Ч�������������á��ͻ��ٶȱȽϿ죬������Ķ��������ǡ�лл����
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
											��û���ã���Ϊ�ǵ��¿�ͨ������Ч�������������á��ͻ��ٶȱȽϿ죬������Ķ��������ǡ�лл����
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
											��û���ã���Ϊ�ǵ��¿�ͨ������Ч�������������á��ͻ��ٶȱȽϿ죬������Ķ��������ǡ�лл����
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
											��û���ã���Ϊ�ǵ��¿�ͨ������Ч�������������á��ͻ��ٶȱȽϿ죬������Ķ��������ǡ�лл����
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
											��û���ã���Ϊ�ǵ��¿�ͨ������Ч�������������á��ͻ��ٶȱȽϿ죬������Ķ��������ǡ�лл����
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
					�ͻ�����
				</div>
				<div class="col-right-ctn">
					<div class="product-text">
						<h1>
							24Сʱ����
						</h1>
						<p>
							400-000-0000
						</p>
						<br />
						<h1>
							�ͷ�����
						</h1>
						<p>
							aaaaaaaa@wwdsdaad.com
						</p>
						<br />
						<h1>
							������ʽ
						</h1>
						<p>
							11244545677
						</p>
					</div>
					<div class="hidden" id="tabC2">
						<div class="product-text">
							<h1>
								�ɽ���¼
								<b class="orange">�����һ���³ɽ���¼��</b>
							</h1>

							<div class="table-data">
								<table cellpadding="0" cellspacing="0" width="100%">
									<tr>
										<th>
											���
										</th>
										<th>
											��������
										</th>
										<th>
											����
										</th>
										<th>
											��������
										</th>
										<th>
											����ʱ��
										</th>
										<th>
											״̬
										</th>
									</tr>
									<tr>
										<td>
											<a href="#">�����û���</a>
										</td>
										<td>
											ŵ����-1681cc
										</td>
										<td>
											<span><b>��1850Ԫ</b>
											</span>
										</td>
										<td>
											<span>1</span>
										</td>
										<td>
											<span>2009-06-29 22:36:27</span>
										</td>
										<td>
											<span><b>�ɽ�</b>
											</span>
										</td>
									</tr>
									<tr class="zebra">
										<td>
											<a href="#">�����û���</a>
										</td>
										<td>
											ŵ����-1681cc
										</td>
										<td>
											<span><b>��1850Ԫ</b>
											</span>
										</td>
										<td>
											<span>1</span>
										</td>
										<td>
											<span>2009-06-29 22:36:27</span>
										</td>
										<td>
											<span><b>�ɽ�</b>
											</span>
										</td>
									</tr>
									<tr>
										<td>
											<a href="#">�����û���</a>
										</td>
										<td>
											ŵ����-1681cc
										</td>
										<td>
											<span><b>��1850Ԫ</b>
											</span>
										</td>
										<td>
											<span>1</span>
										</td>
										<td>
											<span>2009-06-29 22:36:27</span>
										</td>
										<td>
											<span><b>�ɽ�</b>
											</span>
										</td>
									</tr>
									<tr class="zebra">
										<td>
											<a href="#">�����û���</a>
										</td>
										<td>
											ŵ����-1681cc
										</td>
										<td>
											<span><b>��1850Ԫ</b>
											</span>
										</td>
										<td>
											<span>1</span>
										</td>
										<td>
											<span>2009-06-29 22:36:27</span>
										</td>
										<td>
											<span><b>�ɽ�</b>
											</span>
										</td>
									</tr>
									<tr>
										<td>
											<a href="#">�����û���</a>
										</td>
										<td>
											ŵ����-1681cc
										</td>
										<td>
											<span><b>��1850Ԫ</b>
											</span>
										</td>
										<td>
											<span>1</span>
										</td>
										<td>
											<span>2009-06-29 22:36:27</span>
										</td>
										<td>
											<span><b>�ɽ�</b>
											</span>
										</td>
									</tr>
									<tr class="zebra">
										<td>
											<a href="#">�����û���</a>
										</td>
										<td>
											ŵ����-1681cc
										</td>
										<td>
											<span><b>��1850Ԫ</b>
											</span>
										</td>
										<td>
											<span>1</span>
										</td>
										<td>
											<span>2009-06-29 22:36:27</span>
										</td>
										<td>
											<span><b>�ɽ�</b>
											</span>
										</td>
									</tr>
									<tr>
										<td>
											<a href="#">�����û���</a>
										</td>
										<td>
											ŵ����-1681cc
										</td>
										<td>
											<span><b>��1850Ԫ</b>
											</span>
										</td>
										<td>
											<span>1</span>
										</td>
										<td>
											<span>2009-06-29 22:36:27</span>
										</td>
										<td>
											<span><b>�ɽ�</b>
											</span>
										</td>
									</tr>
									<tr class="zebra">
										<td>
											<a href="#">�����û���</a>
										</td>
										<td>
											ŵ����-1681cc
										</td>
										<td>
											<span><b>��1850Ԫ</b>
											</span>
										</td>
										<td>
											<span>1</span>
										</td>
										<td>
											<span>2009-06-29 22:36:27</span>
										</td>
										<td>
											<span><b>�ɽ�</b>
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
											<b>�������������</b>
										</td>
									</tr>
									<tr class="pd10">
										<td width="36">
											<span><font class="bigscore">4.9</font>��</span>
										</td>
										<td width="60">
											<u><big class="stars"><em></em>
											</big>
											</u>
										</td>
									</tr>
									<tr>
										<td colspan="2">
											(�����
											<font class="colorfda600">31</font>��)
										</td>
									</tr>
								</table>


							</div>
							<div class="score">
								<div class="abslt">
									4.5��
								</div>
							</div>
							<div class="rate-right">
								<ul>
									<li class="pleft57">
										�ǳ�����
									</li>
									<li class="pleft30">
										������
									</li>
									<li class="pleft44">
										һ��
									</li>
									<li class="pleft51">
										����
									</li>
									<li class="pleft10">
										�ǳ�����
									</li>
								</ul>
							</div>
						</div>
						<div class="table-data">
							<table cellpadding="0" cellspacing="0" width="100%">
								<tr>
									<th style="width: 80%">
										����
									</th>
									<th>
										������
									</th>
								</tr>
								<tr>
									<td>
										<p class="grey">
											��û���ã���Ϊ�ǵ��¿�ͨ������Ч�������������á��ͻ��ٶȱȽϿ죬������Ķ��������ǡ�лл����
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
											��û���ã���Ϊ�ǵ��¿�ͨ������Ч�������������á��ͻ��ٶȱȽϿ죬������Ķ��������ǡ�лл����
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
											��û���ã���Ϊ�ǵ��¿�ͨ������Ч�������������á��ͻ��ٶȱȽϿ죬������Ķ��������ǡ�лл����
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
											��û���ã���Ϊ�ǵ��¿�ͨ������Ч�������������á��ͻ��ٶȱȽϿ죬������Ķ��������ǡ�лл����
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
											��û���ã���Ϊ�ǵ��¿�ͨ������Ч�������������á��ͻ��ٶȱȽϿ죬������Ķ��������ǡ�лл����
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
											��û���ã���Ϊ�ǵ��¿�ͨ������Ч�������������á��ͻ��ٶȱȽϿ죬������Ķ��������ǡ�лл����
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
				��Ȩ���� (c) 2009 �й��ƶ�ͨ�ż���ɽ���ֹ�˾
			</p>
		</div>
	</body>
</html>