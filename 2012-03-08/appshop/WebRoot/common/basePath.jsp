<%@ page contentType="text/html; charset=GBK"%>
<%@page import="com.appshop.util.PropertiesManager;"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path;
	String imgPath = PropertiesManager.getFilePath("imgpath",
			"/param.properties");
	String cmd_id=	PropertiesManager.getFilePath("cmd_id",
			"/param.properties");	
	String cmd_no=	PropertiesManager.getFilePath("cmd_no",
			"/param.properties");	
%>