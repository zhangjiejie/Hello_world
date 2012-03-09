
package com.appshop.dao;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import org.hibernate.criterion.DetachedCriteria;

import com.appshop.util.PaginationSupport;



public interface IBaseDAO<T> {
	
	/**
	 * Save or update the domain
	 * @param domain Domain to saveOrUpdate
	 * @author <a href="mailto:rory.cn@gmail.com">somebody</a>
	 */
	public void saveOrUpdate(T domain);
	
	/**
	 * Remove the domain from database
	 * @param domain domain to remove
	 * @author <a href="mailto:rory.cn@gmail.com">somebody</a>
	 */
	public void remove(T domain);

	/**
	 * @param id
	 * @return
	 * @author <a href="mailto:rory.cn@gmail.com">somebody</a>
	 */
	public T get(Serializable id);
	
	/**
	 * find object by pagination supprot
	 * @param detachedCriteria 
	 * @param pageSize
	 * @param startIndex
	 * @return
	 * @author <a href="mailto:rory.cn@gmail.com">somebody</a>
	 */
	public PaginationSupport<T> findPageByCriteria(DetachedCriteria detachedCriteria, int pageSize, int startIndex);
	
	/**
	 * Get list by criteria
	 * @param detachedCriteria the domain query criteria, include condition and the orders.
	 * @return
	 * @author <a href="mailto:rory.cn@gmail.com">somebody</a>
	 */
	public List<T> getListByCriteria(DetachedCriteria detachedCriteria);
	
	/**
	 * Get list by criteria
	 * @param detachedCriteria
	 * @param offset
	 * @param size
	 * @return
	 * @author <a href="mailto:rory.cn@gmail.com">somebody</a>
	 */
	public List<T> getListByCriteria(DetachedCriteria detachedCriteria, int offset, int size);
	
	/*
	 * hql = " from User user"
	 * 不带参数
	 * */
	public List<T> getList(final int begin, final int pageSize,final String hql);
	

	/*
	 * 如：hql = " from User user where user.username=?"
	 * 带位置参数
	 * */
	public List<T> getListByPosition(final int begin, final int pageSize,final String hql,final Object[] params);
	
	
	/*
	 * 返回上面的总记录数（）
	 * */
	public int getTotalCountByPosition(String hql, Object[] params);
	
	
	/*
	 * 如：hql = " from User user where user.username=:name"
	 * Map 中key为hql名名参数，Map中的value为值 name=value
	 * */
	public List<T> getListByNamedParameter(final int begin, final int pageSize,final String hql,final Map map);
	
	
	/*
	 * 如：hql = " from User user where user.username=:name and user.id=:id"
	 * 数组names 为{"name","id"}
	 * 数组values 为 {"胡继红",new Long(1)}
	 * */
	public List<T> getListByNamedParameter2(final int begin, final int pageSize,final String hql,final String[] names,final Object[] values) ;
	
	
	/*
	 * 返回上面的总记录数
	 * */
	public int getTotalCountByNamedParameter2(String hql, String[] names,Object[] values) ;
	
	/** 
	 * 在分页显示时获得总数据数 
	 * 简单的hql语句
	 */
	public int getTotalCount(String hql) ;
	
	public int getTotalCount(String hql, Object[] params);
	
	public int getTotalCountByNamedParameter(String hql, Map map);
	
	public List getAll(String queryString, Object[] params);
	
	public List<T> getList(final String hql);
}
