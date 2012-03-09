package com.appshop.service;

import java.util.List;

import com.appshop.model.User;

public interface UserService {

	
	public void save(User user);
	
	public User getByPK(Integer userId);
	
	public List<User> getAll();
	
	public void delete(Integer userId);
	
	public boolean validateName(String name);
	
	public User login(String name,String pass);
	
}
