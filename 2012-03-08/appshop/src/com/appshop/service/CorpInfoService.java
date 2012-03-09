package com.appshop.service;

import java.util.List;

import com.appshop.model.CorpInfo;
import com.appshop.tag.PageController;

public interface CorpInfoService {
	
	public List<CorpInfo> getAll();//商户列表
	
	public List<CorpInfo> getrecommendList();//推荐商户列表
	
	public CorpInfo getCorpInfoById(String id);//根据id获得商户详细信息

	public List<CorpInfo> getAllCount(PageController pageController);
	
}
