package com.appshop.service.impl;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;

import com.appshop.dao.CorpInfoDAO;
import com.appshop.model.CorpInfo;
import com.appshop.service.CorpInfoService;
import com.appshop.tag.PageController;

public class CorpInfoServiceImpl implements CorpInfoService {

	private static final Log log = LogFactory.getLog(CorpInfoServiceImpl.class);
	//注入corpInfoDAO
	private CorpInfoDAO corpInfoDAO;
	
	 
	
	/**
	 * 获取所有数据
	 * */
	public List<CorpInfo> getAll(){
		DetachedCriteria detachedCriteria = DetachedCriteria.forClass(CorpInfo.class);
		detachedCriteria.add(Restrictions.eq("flag", "3"));
		detachedCriteria.add(Restrictions.eq("status", "1"));
		List<CorpInfo> list = corpInfoDAO.getListByCriteria(detachedCriteria);
		return list;
	}
	
	public List<CorpInfo> getrecommendList(){
		DetachedCriteria detachedCriteria = DetachedCriteria.forClass(CorpInfo.class);
		detachedCriteria.add(Restrictions.eq("flag", "3"));
		detachedCriteria.add(Restrictions.eq("status", "1"));
		detachedCriteria.addOrder(Order.desc("corp_level"));
		
		List<CorpInfo> list = corpInfoDAO.getListByCriteria(detachedCriteria,0,10);
		return list; 
	}
	public List<CorpInfo> getAllCount(PageController pageController) {
		String hql = "from CorpInfo t where t.flag=3 and t.status=1 order by corp_level desc";
		 int totalCount=corpInfoDAO.getTotalCount(hql);
	       if(totalCount>0){
	    		pageController.setTotalRows(totalCount);
				pageController.update();
	       }
	      int begin= pageController.getPageStartRow();
	      int pageSize=pageController.getPageSize();
	      List<CorpInfo> list = corpInfoDAO.getList(begin, pageSize, hql);
	      return list;
	}

	public CorpInfoDAO getCorpInfoDAO() {
		return corpInfoDAO;
	}



	public void setCorpInfoDAO(CorpInfoDAO corpInfoDAO) {
		this.corpInfoDAO = corpInfoDAO;
	}

	public CorpInfo getCorpInfoById(String id) {
		DetachedCriteria detachedCriteria = DetachedCriteria.forClass(CorpInfo.class);
		detachedCriteria.add(Restrictions.eq("id", Integer.parseInt(id)));
		detachedCriteria.add(Restrictions.eq("flag", "3"));
		detachedCriteria.add(Restrictions.eq("status", "1"));
		List<CorpInfo> list = corpInfoDAO.getListByCriteria(detachedCriteria);
		CorpInfo corpInfo = null;
		if(list != null && list.size() > 0) {
			corpInfo = list.get(0);
		}
		return corpInfo;
	}
	 
}
