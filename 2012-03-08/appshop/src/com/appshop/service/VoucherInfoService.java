package com.appshop.service;

import java.util.List;

import com.appshop.bean.QueryBean;
import com.appshop.model.VoucherInfo;
import com.appshop.tag.PageController;

public interface VoucherInfoService {
	
	public List<VoucherInfo> getRecommendList(String corp_id);//推荐优惠券首页列表
	
	public List<VoucherInfo> getHotList();//热门列表
	
	public List<VoucherInfo> getAllList(PageController pageController,String corp_no);//推荐优惠券更多列表
	
	public List<VoucherInfo> getSearchResultList(QueryBean queryBean,PageController pageController);//搜索列表
	
}
