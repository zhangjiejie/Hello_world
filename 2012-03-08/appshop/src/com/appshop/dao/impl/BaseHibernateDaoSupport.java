
package com.appshop.dao.impl;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.sql.SQLException;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.criterion.CriteriaSpecification;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Projection;
import org.hibernate.criterion.Projections;
import org.hibernate.impl.CriteriaImpl.OrderEntry;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.SessionFactoryUtils;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.appshop.dao.IBaseDAO;
import com.appshop.util.HibernateUtils;
import com.appshop.util.PaginationSupport;




public abstract class BaseHibernateDaoSupport<T> extends HibernateDaoSupport implements IBaseDAO<T> {

	private Log log = LogFactory.getLog(this.getClass().getName());
	
	private Class<T> entityClass;

	@SuppressWarnings("unchecked")
	public BaseHibernateDaoSupport() {
		entityClass = (Class<T>) ((ParameterizedType) getClass()
				.getGenericSuperclass()).getActualTypeArguments()[0];
	}
	
	/* (non-Javadoc)
	 * @see com.jdkcn.dao.BaseDao#saveOrUpdate(java.lang.Object)
	 */
	public void saveOrUpdate(T domain) {
		//getHibernateTemplate().flush();
		getHibernateTemplate().saveOrUpdate(domain);
	}

	/* (non-Javadoc)
	 * @see com.jdkcn.dao.BaseDao#remove(java.lang.Object)
	 */
	public void remove(T domain) {
		getHibernateTemplate().delete(domain);
	}


	/* (non-Javadoc)
	 * @see com.jdkcn.dao.BaseDao#get(java.io.Serializable)
	 */
	@SuppressWarnings("unchecked")
	public T get(Serializable id) {
		//getHibernateTemplate().load(entityClass, id);
		getHibernateTemplate().setCacheQueries(true);   
		T o = (T) getHibernateTemplate().get(entityClass, id);
		return o;
	}

	/* (non-Javadoc)
	 * @see com.jdkcn.dao.BaseDao#findPageByCriteria(org.hibernate.criterion.DetachedCriteria, int, int)
	 */
	@SuppressWarnings("unchecked")
	public PaginationSupport<T> findPageByCriteria(
			final DetachedCriteria detachedCriteria, final int pageSize, final int startIndex) {
		getHibernateTemplate().setCacheQueries(true);   
		return (PaginationSupport<T>) getHibernateTemplate().execute(new HibernateCallback() {
			public Object doInHibernate(Session session) throws HibernateException, SQLException {
				Criteria executableCriteria = detachedCriteria.getExecutableCriteria(session);

				// Get the orginal orderEntries
				OrderEntry[] orderEntries = HibernateUtils.getOrders(executableCriteria);
				// Remove the orders
				executableCriteria = HibernateUtils.removeOrders(executableCriteria);
				// get the original projection
				Projection projection = HibernateUtils.getProjection(executableCriteria);

				int totalCount = ((Integer) executableCriteria.setProjection(Projections.rowCount()).uniqueResult())
						.intValue();

				executableCriteria.setProjection(projection);
				if (projection == null) {
					// Set the ResultTransformer to get the same object
					// structure with hql
					executableCriteria.setResultTransformer(CriteriaSpecification.ROOT_ENTITY);
				}
				// Add the orginal orderEntries
				executableCriteria = HibernateUtils.addOrders(executableCriteria, orderEntries);

				// Now, the Projection and the orderEntries have been resumed
				List<T> items = HibernateUtils.getPageResult(executableCriteria, startIndex, pageSize);
				return new PaginationSupport(items, totalCount, startIndex, pageSize);
			}
		}, true);
	}
	
	/* (non-Javadoc)
	 * @see com.jdkcn.dao.BaseDao#getListByCriteria(org.hibernate.criterion.DetachedCriteria)
	 */
	@SuppressWarnings("unchecked")
	public List<T> getListByCriteria(DetachedCriteria detachedCriteria) {
		getHibernateTemplate().setCacheQueries(true);   
		return getHibernateTemplate().findByCriteria(detachedCriteria);
	}

	/* (non-Javadoc)
	 * @see com.jdkcn.dao.BaseDao#getListByCriteria(org.hibernate.criterion.DetachedCriteria, int, int)
	 */
	@SuppressWarnings("unchecked")
	public List<T> getListByCriteria(DetachedCriteria detachedCriteria,
			int offset, int size) {
		getHibernateTemplate().setCacheQueries(true);   
		return getHibernateTemplate().findByCriteria(detachedCriteria, offset, size);
	}
	
	
	public List getList(final String hql) {
		getHibernateTemplate().setCacheQueries(true); 
		return getHibernateTemplate().executeFind(new HibernateCallback() {
			public Object doInHibernate(Session session)throws HibernateException, SQLException {
				Query q = null;
				
				q = session.createQuery(hql);
				return q.list();
			}
		});
	}	
	
	
	/*
	 * hql = " from User user"
	 * 不带参数
	 * */
	public List getList(final int begin, final int pageSize,final String hql) {
		getHibernateTemplate().setCacheQueries(true);   
		return getHibernateTemplate().executeFind(new HibernateCallback() {
			public Object doInHibernate(Session session)throws HibernateException, SQLException {
				Query q = null;
				q = session.createQuery(hql);
				q.setFirstResult(begin);
				q.setMaxResults(pageSize);
				return q.list();
			}
		});
	}
	
	/*
	 * 如：hql = " from User user where user.username=?"
	 * 带位置参数
	 * */
	public List getListByPosition(final int begin, final int pageSize,final String hql,final Object[] params) {
		getHibernateTemplate().setCacheQueries(true);   
		return getHibernateTemplate().executeFind(new HibernateCallback() {
			public Object doInHibernate(Session session)throws HibernateException, SQLException {
				Query q = null;
				q = session.createQuery(hql);
				if(params.length>0){
					for(int i=0;i<params.length;i++)
					q.setParameter(i, params[i]);
				}
				q.setFirstResult(begin);
				q.setMaxResults(pageSize);
				//log.warn(q.list().size());
				return q.list();
			}
		});
	}
	/*
	 * 返回上面的总记录数（）
	 * */
	public int getTotalCountByPosition(String hql, Object[] params) {
		//Integer amount = new Integer(0); 
		int sql_from = hql.indexOf(" from");
		int sql_orderby = hql.indexOf("order by");
		String countStr = "";
		if (sql_orderby > 0) {
			countStr = "select count(*) "
					+ hql.substring(sql_from, sql_orderby);
		} else {
			countStr = "select count(*) " + hql.substring(sql_from);
		}

		List list = getHibernateTemplate().find(countStr, params);

		return ((Integer) list.get(0)).intValue();
	}
	
	/*
	 * 如：hql = " from User user where user.username=:name"
	 * Map 中key为hql名名参数，Map中的value为值 name=value
	 * */
	public List getListByNamedParameter(final int begin, final int pageSize,final String hql,final Map map) {
		getHibernateTemplate().setCacheQueries(true);   
		return getHibernateTemplate().executeFind(new HibernateCallback() {
			public Object doInHibernate(Session session)throws HibernateException, SQLException {
				Query q = null;
				q = session.createQuery(hql);
				
				if(map!=null || !map.isEmpty()){
					Set set = map.keySet();
					Iterator it = set.iterator();
					while(it.hasNext()){
						String name = (String)it.next();
						q.setParameter(name, map.get(name));
					}
				}
				q.setFirstResult(begin);
				q.setMaxResults(pageSize);
				return q.list();
			}
		});
	}
	
	/*
	 * 如：hql = " from User user where user.username=:name and user.id=:id"
	 * 数组names 为{"name","id"}
	 * 数组values 为 {"胡继红",new Long(1)}
	 * */
	public List getListByNamedParameter2(final int begin, final int pageSize,final String hql,final String[] names,final Object[] values) {
		if(names.length!=values.length){
			return null;
		}
		getHibernateTemplate().setCacheQueries(true);   
		return getHibernateTemplate().executeFind(new HibernateCallback() {
			public Object doInHibernate(Session session)throws HibernateException, SQLException {
				Query q = null;
				q = session.createQuery(hql);
				int m = names.length;
				for(int i=0;i<m;i++){
					q.setParameter(names[i], values[i]);
				}
				q.setFirstResult(begin);
				q.setMaxResults(pageSize);
				return q.list();
			}
		});
	}
	/*
	 * 返回上面的总记录数
	 * */
	public int getTotalCountByNamedParameter2(String hql, String[] names,Object[] values) {
		getHibernateTemplate().setCacheQueries(true);   
		//Integer amount = new Integer(0); 
		int sql_from = hql.indexOf(" from");
		int sql_orderby = hql.indexOf("order by");
		String countStr = "";
		if (sql_orderby > 0) {
			countStr = "select count(*) "
					+ hql.substring(sql_from, sql_orderby);
		} else {
			countStr = "select count(*) " + hql.substring(sql_from);
		}
		//List list = getHibernateTemplate().find(countStr, params);
		List list = null;
		int m = names.length;
		if(names.length!=values.length){
			return 0;
		}else{
			list =  getHibernateTemplate().findByNamedParam(countStr, names, values);
		}
		return ((Integer) list.get(0)).intValue();
	}
	
	
	/** 
	 * 获得一个session        
	 */
	public Session openSession() {
		return SessionFactoryUtils.getSession(getSessionFactory(), false);
	}
	/** 
	 * 在分页显示时获得总数据数 
	 * 简单的hql语句
	 */
	public int getTotalCount(String hql) {
		Long amount = new Long(0);
		int sql_from = hql.indexOf("from");
		int sql_orderby = hql.indexOf("order by");
		String countStr = "";
		if (sql_orderby > 0) {
			countStr = "select count(*) "
					+ hql.substring(sql_from, sql_orderby);
		} else
			countStr = "select count(*) " + hql.substring(sql_from);
		Session session = this.openSession();
		Query query = session.createQuery(countStr);
		if (!query.list().isEmpty()) {
			amount = (Long)query.list().get(0);
		} else
			return 0;

		return amount.intValue();
	}

	public int getTotalCount(String hql, Object[] params) {
		getHibernateTemplate().setCacheQueries(true);   
		//Integer amount = new Integer(0); 
		int sql_from = hql.indexOf(" from");
		int sql_orderby = hql.indexOf("order by");
		String countStr = "";
		if (sql_orderby > 0) {
			countStr = "select count(*) "
					+ hql.substring(sql_from, sql_orderby);
		} else {
			countStr = "select count(*) " + hql.substring(sql_from);
		}
		List list = getHibernateTemplate().find(countStr, params);
		if(list==null || list.isEmpty()){
			return 0;
		}else{
			return ((Long) list.get(0)).intValue();
		}
	}
	
	
	
	public int getTotalCountByNamedParameter(String hql, Map map) {
		getHibernateTemplate().setCacheQueries(true);   
		//Integer amount = new Integer(0); 
		int sql_from = hql.indexOf(" from");
		int sql_orderby = hql.indexOf("order by");
		String countStr = "";
		if (sql_orderby > 0) {
			countStr = "select count(*) "
					+ hql.substring(sql_from, sql_orderby);
		} else {
			countStr = "select count(*) " + hql.substring(sql_from);
		}
		//List list = getHibernateTemplate().find(countStr, params);
		List list = null;
		if(!map.isEmpty()){
			Object[] obj = map.keySet().toArray();
			String[] names = null;
			int m = obj.length;
			names = new String[m];
			for(int i=0;i<m;i++){
				names[i]=(String)obj[i];
			}
			
			Object[] values = map.values().toArray();
			list =  getHibernateTemplate().findByNamedParam(countStr, names, values);
		}else{
			list = getHibernateTemplate().find(countStr);
		}
		return ((Integer) list.get(0)).intValue();
	}
	
	
	public List getAll(String queryString, Object[] params) {
		List list = null;
		try {
			getHibernateTemplate().setCacheQueries(true); 
			list = getHibernateTemplate().find(queryString, params);
		} catch (Exception e) {
			StringBuffer paramString = new StringBuffer("");
			for (int i = 0; i < params.length; i++) {
				paramString.append(params[i]);
				paramString.append(" ");
			}
			log.error("执行参数为 " + paramString + "的查询 " + queryString + " 失败", e);

		}
		return list;
	}
	
}
