<%@ page contentType="text/html; charset=GBK"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@ include file="/common/basePath.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>��ϵ����</title>
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
				<a href="index.jsp">��ҳ</a> >
				<a href="contact.jsp">��ϵ����</a>
			</div>
			<div class="col-left">
				<div class="col-left-title c-l-orange">�̻�����</div>
				 <iframe  align="top" id="ifram" frameborder="0" scrolling="no" src="voucherInfo.action" width="100%" height="280px"></iframe>
				
				<!-- 
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