package com.appshop.service.impl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.appshop.bean.QueryBean;
import com.appshop.dao.VoucherInfoDAO;
import com.appshop.model.CorpInfo;
import com.appshop.model.VoucherInfo;
import com.appshop.service.VoucherInfoService;
import com.appshop.tag.PageController;
import com.appshop.util.AdDateUtil;

public class VoucherInfoServiceImpl implements VoucherInfoService {

	private static final Log log = LogFactory
			.getLog(VoucherInfoServiceImpl.class);
	// 注入vocherInfoDAO
	private VoucherInfoDAO voucherInfoDAO;

	/**
	 * 获取推荐优惠券列表
	 */
	public List<VoucherInfo> getRecommendList(String corp_no) {
		StringBuffer condition=new StringBuffer();
		if(null!=corp_no&&corp_no.length()!=0){
			condition.append(" and t2.login_no ='"+corp_no+"'");
		}
		String hql = "Select t1.id,t1.corp_no,t1.voucher_content,t2.corp_name,t2.id from VoucherInfo t1,CorpInfo t2 where t1.corp_no=t2.login_no and t2.status=1 and t2.flag=3 and t1.status=1 and t1.assess_flag=1 and t1.send_flag=1 and t1.end_time>sysdate and t1.down_amount<t1.amount "+condition+" order by down_amount desc";
		List listResult = voucherInfoDAO.getList(0, 10, hql);
		List<VoucherInfo> list = new ArrayList<VoucherInfo>();
		for (int i = 0; i < listResult.size(); i++) {
			VoucherInfo voucherInfo = new VoucherInfo();
			CorpInfo corpInfo = new CorpInfo();
			Object[] o = (Object[]) listResult.get(i);
			voucherInfo.setId(Integer.valueOf(o[0].toString()));
			voucherInfo.setCorp_no(String.valueOf(o[1]));
			voucherInfo.setVoucher_content(String.valueOf(o[2]));
			corpInfo.setCorp_name(String.valueOf(o[3]));
			corpInfo.setId(Integer.valueOf(o[4].toString()));
			voucherInfo.setCorpInfo(corpInfo);
			list.add(voucherInfo);
		}

		return list;
	}

	/**
	 * 首页商户排名
	 */
	public List<VoucherInfo> getHotList() {
		String hql = "Select t1.corp_no,t2.corp_name,t2.id from VoucherInfo t1,CorpInfo t2 where t1.corp_no=t2.login_no and t2.status=1 and t2.flag=3 and t1.assess_flag=1 group by  t1.corp_no,t2.corp_name,t2.id order by sum(t1.down_amount) desc ";
		List listResult = voucherInfoDAO.getList(hql);
		Iterator it = listResult.iterator();
		List<VoucherInfo> list = new ArrayList<VoucherInfo>();
		while (it.hasNext()) {
			VoucherInfo voucherInfo = new VoucherInfo();
			CorpInfo corpInfo = new CorpInfo();
			Object[] info = (Object[]) it.next();
			voucherInfo.setCorp_no(String.valueOf(info[0]));
			corpInfo.setCorp_name(String.valueOf(info[1]));
			corpInfo.setId(Integer.valueOf(info[2].toString()));
			voucherInfo.setCorpInfo(corpInfo);
			list.add(voucherInfo);
		}
		return list;
	}

	/**
	 * 优惠券分页列表页面
	 * 
	 * @return
	 */
	public List<VoucherInfo> getAllList(PageController pageController,String corp_no) {
		StringBuffer condition=new StringBuffer();
		if(null!=corp_no&&corp_no.length()!=0){
			condition.append(" and t2.login_no ='"+corp_no+"'");
		}
		String hql = "Select t1.id,t1.corp_no,t1.voucher_content,t2.corp_name,t2.id from VoucherInfo t1,CorpInfo t2 where t1.corp_no=t2.login_no and t2.status=1 and t2.flag=3 and t1.status=1 and t1.assess_flag=1 and t1.send_flag=1 and t1.end_time>sysdate and t1.down_amount<t1.amount "+condition+" order by down_amount desc";
		int totalCount = voucherInfoDAO.getTotalCount(hql);
		if (totalCount > 0) {
			pageController.setTotalRows(totalCount);
			pageController.update();
		}
		int begin = pageController.getPageStartRow();
		int pageSize = pageController.getPageSize();
		List list = voucherInfoDAO.getList(begin, pageSize,hql);
		List<VoucherInfo> listResult=new ArrayList<VoucherInfo>();
		for (int i = 0; i < list.size(); i++) {
			VoucherInfo voucherInfo = new VoucherInfo();
			CorpInfo corpInfo = new CorpInfo();
			Object[] o = (Object[]) list.get(i);
			voucherInfo.setId(Integer.valueOf(o[0].toString()));
			voucherInfo.setCorp_no(String.valueOf(o[1]));
			voucherInfo.setVoucher_content(String.valueOf(o[2]));
			corpInfo.setCorp_name(String.valueOf(o[3]));
			corpInfo.setId(Integer.valueOf(o[4].toString()));
			voucherInfo.setCorpInfo(corpInfo);
			listResult.add(voucherInfo);
		}
		return listResult;
	}
	
	public List<VoucherInfo> getSearchResultList(QueryBean queryBean,PageController pageController){
		String hql = "Select t1.id,t1.corp_no,t1.voucher_content,t1.begin_time,t1.end_time,t2.corp_name,t2.id,t1.voucher_no from VoucherInfo t1,CorpInfo t2 where t1.corp_no=t2.login_no and t2.status=1 and t1.status=1 and t1.assess_flag=1 and t1.end_time>sysdate and t1.send_flag=1 and t2.flag=3 ";
		StringBuffer buffer=new StringBuffer();
		if(null!=queryBean.getNo()&&queryBean.getNo().trim().length()!=0){
			buffer.append(" and t1.voucher_no like '%"+queryBean.getNo().trim()+"%'");
		}
		if(null!=queryBean.getCorp_name()&&queryBean.getCorp_name().trim().length()!=0){
			buffer.append(" and t2.corp_name like '%"+queryBean.getCorp_name().trim()+"%'");
		}
		if(null!=queryBean.getKeyword()&&queryBean.getKeyword().trim().length()!=0){
			buffer.append(" and t1.voucher_content like '%"+queryBean.getKeyword().trim()+"%'");
		}
		buffer.append(" and t1.down_amount<t1.amount order by down_amount desc");
		hql+=buffer.toString();
		int totalCount = voucherInfoDAO.getTotalCount(hql);
		if (totalCount > 0) {
			pageController.setTotalRows(totalCount);
			pageController.update();
		}
		int begin = pageController.getPageStartRow();
		int pageSize = pageController.getPageSize();
		List list = voucherInfoDAO.getList(begin, pageSize,hql);
		List<VoucherInfo> listResult=new ArrayList<VoucherInfo>();
		for (int i = 0; i < list.size(); i++) {
			VoucherInfo voucherInfo = new VoucherInfo();
			CorpInfo corpInfo = new CorpInfo();
			Object[] o = (Object[]) list.get(i);
			voucherInfo.setId(Integer.valueOf(o[0].toString()));
			voucherInfo.setCorp_no(String.valueOf(o[1]));
			voucherInfo.setVoucher_content(String.valueOf(o[2]));
			voucherInfo.setBegin_time(AdDateUtil.getFormatDate(o[3].toString(),"yyyy-MM-dd"));	
			voucherInfo.setEnd_time(AdDateUtil.getFormatDate(o[4].toString(),"yyyy-MM-dd"));	
			corpInfo.setCorp_name(String.valueOf(o[5]));
			corpInfo.setId(Integer.valueOf(o[6].toString()));
			voucherInfo.setVoucher_no(o[7].toString());
			voucherInfo.setCorpInfo(corpInfo);
			listResult.add(voucherInfo);
		}
		return listResult;
	}

	public VoucherInfoDAO getVoucherInfoDAO() {
		return voucherInfoDAO;
	}

	public void setVoucherInfoDAO(VoucherInfoDAO voucherInfoDAO) {
		this.voucherInfoDAO = voucherInfoDAO;
	}

}
