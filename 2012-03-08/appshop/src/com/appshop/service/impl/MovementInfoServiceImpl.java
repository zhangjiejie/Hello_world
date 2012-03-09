package com.appshop.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.appshop.bean.QueryBean;
import com.appshop.dao.MovementInfoDAO;
import com.appshop.model.CorpInfo;
import com.appshop.model.MerchandiseInfo;
import com.appshop.model.MovementInfo;
import com.appshop.service.MovementInfoService;
import com.appshop.tag.PageController;
import com.appshop.util.AdDateUtil;

public class MovementInfoServiceImpl implements MovementInfoService {

	private static final Log log = LogFactory
			.getLog(MovementInfoServiceImpl.class);
	// 注入vocherInfoDAO
	private MovementInfoDAO movementInfoDAO;

	public List<MovementInfo> getNewList() {
		List<MovementInfo> list = movementInfoDAO.getMovementInfoList();
		return list;
	}

	public List<MovementInfo> getAllList(PageController pageController,
			String corp_no) {

		String date = new java.sql.Date(System.currentTimeMillis()).toString();

		StringBuffer hql = new StringBuffer();
		hql.append("select m.id,m.move_subject,m.move_content,c.corp_name,c.login_no ");
		hql.append("from MovementInfo m , CorpInfo c where m.operator_no=c.login_no ");
		hql.append("and m.begin_time <to_date('");
		hql.append(date);
		hql.append("','yyyy-mm-dd') and to_date('");
		hql.append(date);
		hql.append("','yyyy-mm-dd')< m.end_time ");
		hql.append("and m.status =1 and m.assess_flag=1 and c.status=1");

		if (corp_no != null && corp_no.trim().length() > 0) {
			hql.append(" and c.login_no='");
			hql.append(corp_no);
			hql.append("'");
		}

		hql.append(" order by m.create_time desc");

		// System.out.println(hql.toString());

		int totalCount = movementInfoDAO.getTotalCount(hql.toString());
		if (totalCount > 0) {
			pageController.setTotalRows(totalCount);
			pageController.update();
		}
		int begin = pageController.getPageStartRow();
		int pageSize = pageController.getPageSize();
		List<MovementInfo> list = movementInfoDAO.getAllMovementInfoList(begin,
				pageSize, hql.toString());

		return list;

	}

	/*
	 * 活动详细
	 * 
	 * @see com.appshop.service.MovementInfoService#getDetailById(java.lang.Integer)
	 */
	public MovementInfo getDetailById(Integer id) {
		StringBuffer hql = new StringBuffer();
		hql
				.append("select m.id,m.move_subject,m.move_content,c.corp_name,m.begin_time,m.end_time ");
		hql.append("from MovementInfo m ,CorpInfo c ");
		hql.append("where m.operator_no=c.login_no and m.id=");
		hql.append(id);

		return movementInfoDAO.getMovementInfoDetail(hql.toString());
		// return movementInfoDAO.get(id);
	}

	public List<MovementInfo> getSearchResultList(QueryBean queryBean,PageController pageController) {
		String now = AdDateUtil.getNowStr("yyyy-MM-dd");
		String hql = "Select t1.id,t1.move_subject,t1.move_content,t1.begin_time,t1.end_time,t2.corp_name,t2.id from MovementInfo t1,CorpInfo t2 where t1.operator_no=t2.login_no and t1.assess_flag=1 and t1.status=1 and t2.status=1";
		StringBuffer condition = new StringBuffer();
		if (queryBean.getName() != null
				&& queryBean.getName().trim().length() != 0) {
			condition.append(" and t1.move_subject like '%"
					+ queryBean.getName().trim() + "%'");
		}
		if (queryBean.getCorp_name() != null
				&& queryBean.getCorp_name().trim().length() != 0) {
			condition.append(" and t2.corp_name like '%"
					+ queryBean.getCorp_name().trim() + "%'");
		}
		if (queryBean.getKeyword() != null
				&& queryBean.getKeyword().trim().length() != 0) {
			condition.append(" and t1.move_content like '%"
					+ queryBean.getKeyword().trim() + "%'");
		}
		if (queryBean.getBegin_time() != null
				&& queryBean.getBegin_time().trim().length() != 0) {
			condition.append(" and t1.end_time >=to_date("
					+ queryBean.getBegin_time().trim() + ",'yyyy-MM-dd')");
		}
		if (queryBean.getEnd_time() != null
				&& queryBean.getEnd_time().trim().length() != 0) {
			condition.append(" and t1.end_time <=to_date("
					+ queryBean.getEnd_time().trim() + ",'yyyy-MM-dd')");
		}
		hql += condition.toString();
		int totalCount = movementInfoDAO.getTotalCount(hql);
		if (totalCount > 0) {
			pageController.setTotalRows(totalCount);
			pageController.update();
		}
		int begin = pageController.getPageStartRow();
		int pageSize = pageController.getPageSize();
		List list = movementInfoDAO.getList(begin, pageSize, hql);
		List<MovementInfo> listResult = new ArrayList<MovementInfo>();
		for (int i = 0; i < list.size(); i++) {
			Object[] o = (Object[]) list.get(i);
			MovementInfo movementInfo = new MovementInfo();
			CorpInfo corpInfo = new CorpInfo();
			movementInfo.setId(Integer.parseInt(o[0].toString()));
			movementInfo.setMove_subject(String.valueOf(o[1]));
			movementInfo.setMove_content(String.valueOf(o[2]));
			movementInfo.setBegin_time(AdDateUtil.getFormatDate(
					o[3].toString(), "yyyy-MM-dd"));
			movementInfo.setEnd_time(AdDateUtil.getFormatDate(o[4].toString(),
					"yyyy-MM-dd"));
			corpInfo.setCorp_name(String.valueOf(o[5]));
			corpInfo.setId(Integer.valueOf(o[6].toString()));
			movementInfo.setCorpInfo(corpInfo);
			listResult.add(movementInfo);
		}
		return listResult;

	}

	public MovementInfoDAO getMovementInfoDAO() {
		return movementInfoDAO;
	}

	public void setMovementInfoDAO(MovementInfoDAO movementInfoDAO) {
		this.movementInfoDAO = movementInfoDAO;
	}

}
