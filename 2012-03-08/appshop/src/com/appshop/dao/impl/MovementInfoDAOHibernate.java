package com.appshop.dao.impl;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.hibernate.Query;

import com.appshop.dao.MovementInfoDAO;
import com.appshop.model.MovementInfo;

public class MovementInfoDAOHibernate extends
		BaseHibernateDaoSupport<MovementInfo> implements MovementInfoDAO {

	public List<MovementInfo> getMovementInfoList() {

		// List<MovementInfo> MovementInfoList = this.getHibernateTemplate()
		// .loadAll(MovementInfo.class);
		// CorpInfo c = new CorpInfo();
		List<MovementInfo> movementInfoList = new ArrayList();
		List<Object> resultList = new ArrayList();

		Date d = new java.sql.Date(System.currentTimeMillis());

		StringBuffer sql = new StringBuffer();
		sql.append("select m.id,m.move_subject,m.move_content,c.corp_name ");
		sql
				.append("from MovementInfo m , CorpInfo c where m.operator_no=c.login_no ");
		sql
				.append("and m.begin_time < :systemDate and :systemDate < m.end_time ");
		sql.append("and m.status =1 and m.assess_flag=1 and c.status=1");
		sql.append("order by m.create_time desc");

		Query query = this.getSession().createQuery(sql.toString());
		query.setFirstResult(0);
		query.setMaxResults(4);

		resultList = query.setDate("systemDate", d).list();
		for (int i = 0; i < resultList.size(); i++) {
			MovementInfo theForm = new MovementInfo();
			Object[] row = (Object[]) resultList.get(i);
			theForm.setId((Integer) row[0]);
			theForm.setMove_subject((String) row[1]);
			if (theForm.getMove_subject().length() > 23) {
				theForm.setBrief_move_subject(theForm.getMove_subject()
						.substring(0, 22)
						+ "...");
			} else {
				theForm.setBrief_move_subject(theForm.getMove_subject());
			}

			theForm.setMove_content((String) row[2]);
			// 内容过长，截断
			if (theForm.getMove_content().length() > 86) {
				theForm.setBrief_move_content(theForm.getMove_content()
						.substring(0, 85)
						+ "...");
			} else {
				theForm.setBrief_move_content(theForm.getMove_content());
			}
			
			theForm.setCorp_name((String) row[3]);
			if (theForm.getCorp_name().length() > 23) {
				theForm.setBrief_corp_name(theForm.getCorp_name()
						.substring(0, 22)
						+ "...");
			} else {
				theForm.setBrief_corp_name(theForm.getCorp_name());
			}
			
			movementInfoList.add(theForm);
		}

		return movementInfoList;
	}

	public List<MovementInfo> getAllMovementInfoList(int begin, int pageSize,
			String hql) {

		List<MovementInfo> movementInfoList = new ArrayList();
		List<Object[]> resultList = new ArrayList();

		// Date d = new java.sql.Date(System.currentTimeMillis());

		Query query = this.getSession().createQuery(hql);
		query.setFirstResult(begin);
		query.setMaxResults(pageSize);

		resultList = query.list();
		for (int i = 0; i < resultList.size(); i++) {
			MovementInfo theForm = new MovementInfo();
			Object[] row = resultList.get(i);
			theForm.setId((Integer) row[0]);
			theForm.setMove_subject((String) row[1]);
			if (theForm.getMove_subject().length() > 23) {
				theForm.setBrief_move_subject(theForm.getMove_subject()
						.substring(0, 22)
						+ "...");
			} else {
				theForm.setBrief_move_subject(theForm.getMove_subject());
			}

			theForm.setMove_content((String) row[2]);
			// 内容过长，截断
			if (theForm.getMove_content().length() > 86) {
				theForm.setBrief_move_content(theForm.getMove_content()
						.substring(0, 85)
						+ "...");
			} else {
				theForm.setBrief_move_content(theForm.getMove_content());
			}
			
			theForm.setCorp_name((String) row[3]);
			if (theForm.getCorp_name().length() > 23) {
				theForm.setBrief_corp_name(theForm.getCorp_name()
						.substring(0, 22)
						+ "...");
			} else {
				theForm.setBrief_corp_name(theForm.getCorp_name());
			}
			movementInfoList.add(theForm);
		}

		return movementInfoList;
	}

	public MovementInfo getMovementInfoDetail(String hql) {
		List<MovementInfo> movementInfoList = new ArrayList();
		List<Object[]> resultList = new ArrayList();
		Query query = this.getSession().createQuery(hql);
		MovementInfo theForm = new MovementInfo();

		resultList = query.list();
		if (resultList != null && resultList.size() > 0) {
			Object[] row = resultList.get(0);
			theForm.setId((Integer) row[0]);
			theForm.setMove_subject((String) row[1]);
			theForm.setMove_content((String) row[2]);
			theForm.setCorp_name((String) row[3]);
			theForm.setBegin_time(((Timestamp) row[4]));
			theForm.setEnd_time((Timestamp) row[5]);
		}
		return theForm;
	}

}
