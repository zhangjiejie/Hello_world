package com.appshop.web;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.struts2.ServletActionContext;

import com.appshop.bean.QueryBean;
import com.appshop.model.MerchandiseInfo;
import com.appshop.service.MerchandiseInfoService;
import com.appshop.tag.PageController;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

public class MerchandiseInfoAction extends ActionSupport {

	private static final long serialVersionUID = 7850657695180821141L;
	
	private static final Log log = LogFactory.getLog(MerchandiseInfoAction.class);

	private List<MerchandiseInfo> list;
	
	private List<MerchandiseInfo> merchandiseInfoSearchList;//搜索列表
	
	private MerchandiseInfo merchandiseInfo;
	
	private PageController pageController=new PageController();//分页控制类
	
	private QueryBean queryBean=new QueryBean(); //搜索类
	

	// 提示信息
	private String tip;
	// 注入
	private MerchandiseInfoService merchandiseInfoService;

	public String getTip() {
		return tip;
	}

	public void setTip(String tip) {
		this.tip = tip;
	}

	@Override
	/**
	 * 最新商品
	 */
	public String execute() throws Exception {
		String corp_no="";
		if(getrequestValue("corp_no")!=null){
			corp_no=getrequestValue("corp_no").toString();
		}
		list = merchandiseInfoService.getNewAll(corp_no);
		return SUCCESS;
	}
	
	/**
	 * 商品列表
	 * @return
	 * @throws Exception
	 */
	public String list()throws Exception{
		String corp_no="";
		if(getrequestValue("corp_no")!=null){
			corp_no=getrequestValue("corp_no").toString();
		}
		list=merchandiseInfoService.getAllList(this.getPageController(),corp_no);
		return SUCCESS;
	}
	
	/**
	 * 商品详情
	 * @return
	 * @throws Exception
	 */
	public String detail()throws Exception{
		ActionContext ac =ActionContext.getContext();
		HttpServletRequest request = (HttpServletRequest)ac.get(ServletActionContext.HTTP_REQUEST);
	    Integer id=Integer.valueOf((request.getParameter("id").toString()));//商品编号
	    merchandiseInfo=merchandiseInfoService.getDetailById(id);
		return SUCCESS;
	}
	
	/**
	 * 搜索商品列表
	 * @return
	 */
	public String search()throws Exception{
		if(getrequestValue("keyword")!=null){
			queryBean.setKeyword(getrequestValue("keyword").toString());
		}else{
			String name=getrequestValue("name").toString();
			String begin_price=getrequestValue("begin_price").toString();
			String end_price=getrequestValue("end_price").toString();
			String corp_name=getrequestValue("corp_name").toString();
			queryBean.setName(name);
			queryBean.setBegin_price(begin_price);
			queryBean.setEnd_price(end_price);
			queryBean.setCorp_name(corp_name);
		}
		merchandiseInfoSearchList=merchandiseInfoService.getSearchResult(queryBean,pageController);
		return SUCCESS;
	}
	
	public List<MerchandiseInfo> getList() {
		return list;
	}

	public void setList(List<MerchandiseInfo> list) {
		this.list = list;
	}

	public MerchandiseInfoService getMerchandiseInfoService() {
		return merchandiseInfoService;
	}

	public void setMerchandiseInfoService(
			MerchandiseInfoService merchandiseInfoService) {
		this.merchandiseInfoService = merchandiseInfoService;
	}

	public PageController getPageController() {
		return pageController;
	}

	public void setPageController(PageController pageController) {
		this.pageController = pageController;
	}

	public MerchandiseInfo getMerchandiseInfo() {
		return merchandiseInfo;
	}

	public void setMerchandiseInfo(MerchandiseInfo merchandiseInfo) {
		this.merchandiseInfo = merchandiseInfo;
	}

	public QueryBean getQueryBean() {
		return queryBean;
	}

	public void setQueryBean(QueryBean queryBean) {
		this.queryBean = queryBean;
	}

	public List<MerchandiseInfo> getMerchandiseInfoSearchList() {
		return merchandiseInfoSearchList;
	}

	public void setMerchandiseInfoSearchList(
			List<MerchandiseInfo> merchandiseInfoSearchList) {
		this.merchandiseInfoSearchList = merchandiseInfoSearchList;
	}
	
	public Object getrequestValue(String name){
		ActionContext ac =ActionContext.getContext();
		HttpServletRequest request = (HttpServletRequest)ac.get(ServletActionContext.HTTP_REQUEST);
		return request.getParameter(name);
	}
}
