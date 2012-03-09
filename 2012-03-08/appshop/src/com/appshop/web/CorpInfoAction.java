package com.appshop.web;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.appshop.model.CorpInfo;
import com.appshop.service.CorpInfoService;
import com.appshop.tag.PageController;
import com.opensymphony.xwork2.ActionSupport;

public class CorpInfoAction extends ActionSupport {

	private static final long serialVersionUID = 7850657695180821141L;
	private static final Log log = LogFactory.getLog(CorpInfoAction.class);

	private List<CorpInfo> list;

	// 提示信息
	private String tip;
	private String corp_id;
	private String result;
	
	private PageController pageController=new PageController();
	// 注入
	private CorpInfoService corpInfoService;
	
	private CorpInfo corpInfo; 

	public List<CorpInfo> getList() {
		return list;
	}

	public void setList(List<CorpInfo> list) {
		this.list = list;
	}

	public String getTip() {
		return tip;
	}

	public void setTip(String tip) {
		this.tip = tip;
	}

	public CorpInfoService getCorpInfoService() {
		return corpInfoService;
	}

	public void setCorpInfoService(CorpInfoService corpInfoService) {
		this.corpInfoService = corpInfoService;
	}

	public PageController getPageController() {
		return pageController;
	}

	public void setPageController(PageController pageController) {
		this.pageController = pageController;
	}
	@Override
	/**
	 * 商户列表
	 */
	public String execute() throws Exception {
		list=corpInfoService.getAll();
		return SUCCESS;
	}
	
	/**
	 * 推荐商户
	 * @return
	 * @throws Exception
	 */
	public String recommend()throws Exception{
		String result = getResult();
		String returnCode = "";
		if(result != null && result.equals("all")) {
			list = corpInfoService.getAllCount(pageController);
			returnCode = "allList";
		} else {
			list=corpInfoService.getrecommendList();
			returnCode = SUCCESS;
		}
		return returnCode;
	}

	/**
	 * 获得商户详细信息
	 * @return
	 * @throws Exception
	 */
	public String getInfoById()throws Exception{
		String corp_id = getCorp_id();
		corpInfo =corpInfoService.getCorpInfoById(corp_id);
		return SUCCESS;
	}
	
	public String search()throws Exception{
		return SUCCESS;
	}

	public String getCorp_id() {
		return corp_id;
	}

	public void setCorp_id(String corp_id) {
		this.corp_id = corp_id;
	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public CorpInfo getCorpInfo() {
		return corpInfo;
	}

	public void setCorpInfo(CorpInfo corpInfo) {
		this.corpInfo = corpInfo;
	}


}
