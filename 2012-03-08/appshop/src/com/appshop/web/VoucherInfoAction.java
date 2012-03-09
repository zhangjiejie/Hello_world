package com.appshop.web;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.struts2.ServletActionContext;

import com.appshop.bean.QueryBean;
import com.appshop.model.VoucherInfo;
import com.appshop.service.VoucherInfoService;
import com.appshop.tag.PageController;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.appshop.util.StringUtil;;

public class VoucherInfoAction extends ActionSupport {

	private static final long serialVersionUID = 7850657695180821141L;
	private static final Log log = LogFactory.getLog(VoucherInfoAction.class);

	private List<VoucherInfo> list;
	
	private List<VoucherInfo> voucherInfoSearchList;

	// 提示信息
	private String tip;
	// 注入
	private VoucherInfoService voucherInfoService;
	private PageController pageController=new PageController();
	private QueryBean querybean=new QueryBean();;

	public QueryBean getQuerybean() {
		return querybean;
	}

	public void setQuerybean(QueryBean querybean) {
		this.querybean = querybean;
	}

	public String getTip() {
		return tip;
	}

	public void setTip(String tip) {
		this.tip = tip;
	}

	@Override
	/**
	 * 最热的商户登陆名列表
	 */
	public String execute() throws Exception {
		list = voucherInfoService.getHotList();
		return SUCCESS;
	}

	/**
	 *  推荐的优惠券列表
	 * @return
	 * @throws Exception
	 */
	public String recommended() throws Exception {
		String corp_no="";
		if(getrequestValue("corp_no")!=null){
			corp_no=getrequestValue("corp_no").toString();
		}
		list = voucherInfoService.getRecommendList(corp_no); 
		return SUCCESS;
	}
	/**
	 * 推荐的优惠券更多列表
	 * @return
	 * @throws Exception
	 */
	public String list()throws Exception{ 
		String corp_no="";
		if(getrequestValue("corp_no")!=null){
			corp_no=getrequestValue("corp_no").toString();
		}
		list=voucherInfoService.getAllList(pageController,corp_no);
		return SUCCESS;
		
	}
	
	/**
	 * 优惠券搜索列表
	 * @return
	 * @throws Exception
	 */
	public String search()throws Exception{ 
		
		if(getrequestValue("keyword")!=null){
			querybean.setKeyword(getrequestValue("keyword").toString());
		}else{
			String no=getrequestValue("vno").toString();
			String corp_name=getrequestValue("vcorp_name").toString();	
			querybean.setCorp_name(corp_name);
			querybean.setNo(no);
		}
		voucherInfoSearchList=voucherInfoService.getSearchResultList(querybean,pageController);
		return SUCCESS;
		
	}
	
	

	public List<VoucherInfo> getList() {
		return list;
	}

	public void setList(List<VoucherInfo> list) {
		this.list = list;
	}

	public VoucherInfoService getVoucherInfoService() {
		return voucherInfoService;
	}

	public void setVoucherInfoService(VoucherInfoService voucherInfoService) {
		this.voucherInfoService = voucherInfoService;
	}

	public PageController getPageController() {
		return pageController;
	}

	public void setPageController(PageController pageController) {
		this.pageController = pageController;
	}

	public static long getSerialVersionUID() {
		return serialVersionUID;
	}

	public List<VoucherInfo> getVoucherInfoSearchList() {
		return voucherInfoSearchList;
	}

	public void setVoucherInfoSearchList(List<VoucherInfo> voucherInfoSearchList) {
		this.voucherInfoSearchList = voucherInfoSearchList;
	}

	public Object getrequestValue(String name){
		ActionContext ac =ActionContext.getContext();
		HttpServletRequest request = (HttpServletRequest)ac.get(ServletActionContext.HTTP_REQUEST);
		return request.getParameter(name);
	}


}
