package com.appshop.web;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.struts2.ServletActionContext;

import com.appshop.bean.QueryBean;
import com.appshop.model.MerchandiseInfo;
import com.appshop.model.MovementInfo;
import com.appshop.service.MovementInfoService;
import com.appshop.tag.PageController;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

public class MovementInfoAction extends ActionSupport {

	private static final long serialVersionUID = 7850657695180821141L;
	private static final Log log = LogFactory.getLog(MovementInfoAction.class);
	
	MovementInfo movementInfo;
	
	//商户名称
	String corp_no;
	
	private PageController pageController=new PageController();

	private List<MovementInfo> list;
	
	private List<MovementInfo> movementInfoSearchList;//搜索列表
	
	private QueryBean queryBean=new QueryBean(); //搜索类

	// 提示信息
	private String tip;
	// 注入
	private MovementInfoService movementInfoService;
	
	@Override
	/**
	 * 主页 预览列表
	 */
	public String execute() throws Exception {
		list=movementInfoService.getNewList();
		return SUCCESS;
	}
	
	/**
	 * 活动列表
	 * @return
	 * @throws Exception
	 */
	public String movementInfoList() throws Exception {
		
		list = movementInfoService.getAllList(pageController,corp_no);

		return SUCCESS;
	}
	
	/**
	 * 活动详情
	 * @return
	 * @throws Exception
	 */
	public String movementInfoDetail()throws Exception{
		ActionContext ac =ActionContext.getContext();
		HttpServletRequest request = (HttpServletRequest)ac.get(ServletActionContext.HTTP_REQUEST);
	    Integer id=Integer.valueOf((request.getParameter("id").toString()));//商品编号
	    movementInfo = movementInfoService.getDetailById(id);
		return SUCCESS;
	}
	
	public String search()throws Exception{
		
		if(getrequestValue("keyword")!=null){
			queryBean.setKeyword(getrequestValue("keyword").toString());
		}else{
			String name=getrequestValue("mname").toString();
			String begin_time=getrequestValue("mbegin_time").toString();
			String end_time=getrequestValue("mend_time").toString();
			queryBean.setName(name);
			queryBean.setBegin_time(begin_time);
			queryBean.setEnd_time(end_time);
		}
		movementInfoSearchList=movementInfoService.getSearchResultList(queryBean,pageController);
		return SUCCESS;
	}
	

	
	
	public String list() {
		
		return SUCCESS;
	}
	
	public String getTip() {
		return tip;
	}

	public void setTip(String tip) {
		this.tip = tip;
	}

	public List<MovementInfo> getList() {
		return list;
	}

	public void setList(List<MovementInfo> list) {
		this.list = list;
	}

	public MovementInfoService getMovementInfoService() {
		return movementInfoService;
	}

	public void setMovementInfoService(MovementInfoService movementInfoService) {
		this.movementInfoService = movementInfoService;
	}

	public PageController getPageController() {
		return pageController;
	}

	public void setPageController(PageController pageController) {
		this.pageController = pageController;
	}

	public MovementInfo getMovementInfo() {
		return movementInfo;
	}

	public void setMovementInfo(MovementInfo movementInfo) {
		this.movementInfo = movementInfo;
	}

	public List<MovementInfo> getMovementInfoSearchList() {
		return movementInfoSearchList;
	}

	public void setMovementInfoSearchList(List<MovementInfo> movementInfoSearchList) {
		this.movementInfoSearchList = movementInfoSearchList;
	}
	
	public Object getrequestValue(String name){
		ActionContext ac =ActionContext.getContext();
		HttpServletRequest request = (HttpServletRequest)ac.get(ServletActionContext.HTTP_REQUEST);
		return request.getParameter(name);
	}

	public QueryBean getQueryBean() {
		return queryBean;
	}

	public void setQueryBean(QueryBean queryBean) {
		this.queryBean = queryBean;
	}

	public String getCorp_no() {
		return corp_no;
	}

	public void setCorp_no(String corp_no) {
		this.corp_no = corp_no;
	}

}
