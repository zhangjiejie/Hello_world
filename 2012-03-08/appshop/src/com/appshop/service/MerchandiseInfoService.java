package com.appshop.service;

import java.util.List;

import com.appshop.bean.QueryBean;
import com.appshop.model.MerchandiseInfo;
import com.appshop.tag.PageController;

public interface MerchandiseInfoService {
	
	public List<MerchandiseInfo> getNewAll(String corp_id);//商品最新列表
	
	public List<MerchandiseInfo> getAllList(PageController pageController,String corp_no);//商品列表
	
	public MerchandiseInfo getDetailById(Integer id);//商品详情
	
	public List<MerchandiseInfo> getSearchResult(QueryBean queryBean,PageController pageController);//搜索商品结果列表
	
}
