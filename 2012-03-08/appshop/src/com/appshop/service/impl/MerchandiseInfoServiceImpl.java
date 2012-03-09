package com.appshop.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.appshop.bean.QueryBean;
import com.appshop.dao.MerchandiseInfoDAO;
import com.appshop.model.CorpInfo;
import com.appshop.model.MerchandiseInfo;
import com.appshop.service.MerchandiseInfoService;
import com.appshop.tag.PageController;

public class MerchandiseInfoServiceImpl implements MerchandiseInfoService {

	private static final Log log = LogFactory
			.getLog(MerchandiseInfoServiceImpl.class);
	// 注入MerchandiseInfoDAO
	private MerchandiseInfoDAO merchandiseInfoDAO;

	/**
	 * 获取首页最新商品数据
	 */
	public List<MerchandiseInfo> getNewAll(String corp_no) {
		List<MerchandiseInfo> list =new ArrayList<MerchandiseInfo>();
		StringBuffer condition=new StringBuffer();
		if(null!=corp_no&&corp_no.length()!=0){
			condition.append(" and t2.login_no ='"+corp_no+"'");
		}
		String hql="select t1.id,t1.icon,t1.name,t1.current_price from MerchandiseInfo t1,CorpInfo t2 where t1.corp_no=t2.login_no and t1.up_flag=1 and t1.assess_flag=1 and t1.status=1 and t2.status=1 and t2.flag=3 "+condition+" order by t1.create_time desc";
		List listResult=merchandiseInfoDAO.getList(0, 10, hql);
		for(int i=0;i<listResult.size();i++){
			Object[] o=(Object[])listResult.get(i);
			MerchandiseInfo theInfo=new MerchandiseInfo();
			theInfo.setId(Integer.parseInt(o[0].toString()));
			theInfo.setIcon(o[1].toString());
			theInfo.setName(o[2].toString());
			theInfo.setCurrent_price(o[3].toString());
			list.add(theInfo);
		}
		return list;
	}
	
    public List<MerchandiseInfo> getAllList(PageController pageController,String corp_no){
    	StringBuffer condition=new StringBuffer();
		if(null!=corp_no&&corp_no.length()!=0){
			condition.append(" and t2.login_no = '"+corp_no+"'");
		}
       String hql="select t1.id,t1.icon,t1.name,t1.current_price,t2.corp_name,t2.id from MerchandiseInfo t1,CorpInfo t2 where t1.corp_no=t2.login_no and t1.up_flag=1 and t1.assess_flag=1 and t1.status=1 and t2.flag=3 and t2.status=1 "+condition;
       int totalCount=merchandiseInfoDAO.getTotalCount(hql);
       if(totalCount>0){
    		pageController.setTotalRows(totalCount);
			pageController.update();
       }
      int begin= pageController.getPageStartRow();
      int pageSize=pageController.getPageSize();
       List list=merchandiseInfoDAO.getList(begin, pageSize, hql);
       List<MerchandiseInfo> listResult=new ArrayList<MerchandiseInfo>();
       for(int i=0;i<list.size();i++){
    		Object[] o=(Object[])list.get(i);
    		MerchandiseInfo theInfo=new MerchandiseInfo();
			theInfo.setId(Integer.parseInt(o[0].toString()));
			theInfo.setIcon(o[1].toString());
			theInfo.setName(o[2].toString());
			theInfo.setCurrent_price(o[3].toString());
			CorpInfo corpInfo=new CorpInfo();
			corpInfo.setCorp_name(o[4].toString());
			corpInfo.setId(Integer.parseInt(o[5].toString()));
			theInfo.setCorpInfo(corpInfo);
			listResult.add(theInfo);
       }
       return listResult; 
       
    }
    
    /**
     * 搜索商品结果列表
     */
    
    public List<MerchandiseInfo> getSearchResult(QueryBean queryBean,PageController pageController){
    	String hql="Select t1.id,t1.name,t1.amount,t1.icon,t1.current_price,t2.corp_name,t2.id from MerchandiseInfo t1,CorpInfo t2 where t1.corp_no=t2.login_no and t2.flag=3 and t1.up_flag=1 and t1.assess_flag=1 and t1.status=1";
    	StringBuffer condition=new StringBuffer();
    	if(queryBean.getName()!=null&&queryBean.getName().trim().length()!=0){
    		condition.append(" and t1.name like '%"+queryBean.getName().trim()+"%'");
    	}
    	if(queryBean.getCorp_name()!=null&&queryBean.getCorp_name().trim().length()!=0){
    		condition.append(" and t2.corp_name like '%"+queryBean.getCorp_name().trim()+"%'");
    	}
    	if(queryBean.getBegin_price()!=null&&queryBean.getBegin_price().trim().length()!=0){
    		condition.append(" and to_number(t1.current_price) >="+Integer.parseInt(queryBean.getBegin_price().trim())+"");
    	}
    	if(queryBean.getEnd_price()!=null&&queryBean.getEnd_price().trim().length()!=0){
    		condition.append(" and  to_number(t1.current_price) <="+Integer.parseInt(queryBean.getEnd_price().trim())+"");
    	}
    	if(null!=queryBean.getKeyword()&&queryBean.getKeyword().trim().length()!=0){
    		condition.append(" and t1.name like '%"+queryBean.getKeyword().trim()+"%'");
		}
    	hql+=condition.toString();
        int totalCount=merchandiseInfoDAO.getTotalCount(hql);
        if(totalCount>0){
        	pageController.setTotalRows(totalCount);
        	pageController.update();
        }
        int begin= pageController.getPageStartRow();
        int pageSize=pageController.getPageSize();
        List list=merchandiseInfoDAO.getList(begin, pageSize, hql);
        List<MerchandiseInfo> listResult=new ArrayList<MerchandiseInfo>();
        for(int i=0;i<list.size();i++){
        	Object[] o=(Object[])list.get(i);
        	MerchandiseInfo merchandiseInfo=new MerchandiseInfo();
        	CorpInfo corpInfo=new CorpInfo();
        	merchandiseInfo.setId(Integer.valueOf(o[0].toString()));
        	merchandiseInfo.setName(String.valueOf(o[1]));
        	merchandiseInfo.setAmount(String.valueOf(o[2]));
        	merchandiseInfo.setIcon(String.valueOf(o[3]));
        	merchandiseInfo.setCurrent_price(String.valueOf(o[4]));
            corpInfo.setCorp_name(String.valueOf(o[5]));
            corpInfo.setId(Integer.valueOf(o[6].toString())); 
            merchandiseInfo.setCorpInfo(corpInfo);
            listResult.add(merchandiseInfo);
        }
        return listResult;
    
    }

    public MerchandiseInfo getDetailById(Integer id){
    	return merchandiseInfoDAO.get(id);
     }
	public MerchandiseInfoDAO getMerchandiseInfoDAO() {
		return merchandiseInfoDAO;
	}

	public void setMerchandiseInfoDAO(MerchandiseInfoDAO merchandiseInfoDAO) {
		this.merchandiseInfoDAO = merchandiseInfoDAO;
	}

}
