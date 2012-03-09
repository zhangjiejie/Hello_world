package com.appshop.service.impl;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;

import com.appshop.dao.UserDAO;
import com.appshop.model.User;
import com.appshop.service.UserService;

public class UserServiceImpl implements UserService {

	private static final Log log = LogFactory.getLog(UserServiceImpl.class);
	//注入userDAO
	private UserDAO userDAO;
	
	/**
	 * 添加修改
	 * */
	public void save(User user){
		userDAO.saveOrUpdate(user);
	}
	
	/**
	 * 主键取得对象
	 * */
	public User getByPK(Integer userId){
		return userDAO.get(userId);
	}
	
	/**
	 * 获取所有数据
	 * */
	public List<User> getAll(){
		DetachedCriteria detachedCriteria = DetachedCriteria.forClass(User.class);
		List<User> list = userDAO.getListByCriteria(detachedCriteria);
		return list;
	}
	
	/**
	 * 删除一对象
	 * @param userId 主键值
	 * */
	public void delete(Integer userId){
		this.userDAO.remove(this.getByPK(userId));
	}

	
	/**
	 * set/get方法
	 * */
	public UserDAO getUserDAO() {
		return userDAO;
	}

	public void setUserDAO(UserDAO userDAO) {
		this.userDAO = userDAO;
	}
	
	/**
	 * 检查用户名是否有效
	 * @return 
	 * false 无效，已占用
	 * true  有效，可以使用
	 * */
	public boolean validateName(String name){
		DetachedCriteria detachedCriteria = DetachedCriteria.forClass(User.class);
		detachedCriteria.add(Restrictions.eq("name", name));
		List<User> list = this.userDAO.getListByCriteria(detachedCriteria);
		if(list.isEmpty() || list.size()==0){
			return true;
		}else{
			return false;
		}
	}
	
	/**
	 * 登陆检查
	 * null 登陆失败
	 * 		成功
	 * */
	public User login(String name,String pass){
		DetachedCriteria detachedCriteria = DetachedCriteria.forClass(User.class);
		detachedCriteria.add(Restrictions.eq("name", name));
		detachedCriteria.add(Restrictions.eq("pass", pass));
		List<User> list = this.userDAO.getListByCriteria(detachedCriteria);
		if(list.isEmpty() || list.size()==0){
			return null;
		}else{
			return list.get(0);
		}
	}
}
