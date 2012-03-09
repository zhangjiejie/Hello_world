package com.appshop.service;

import java.util.List;

import com.appshop.bean.QueryBean;
import com.appshop.model.MovementInfo;
import com.appshop.tag.PageController;

public interface MovementInfoService {
	
	public List<MovementInfo> getNewList();//最新活动列表
	
	public List<MovementInfo> getAllList(PageController pageController,String corp_no);
	
	public MovementInfo getDetailById(Integer id);
	
	public List<MovementInfo> getSearchResultList(QueryBean queryBean,PageController pageController);//搜索结果列表
	
}
