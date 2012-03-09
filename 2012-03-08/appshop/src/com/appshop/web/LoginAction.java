package com.appshop.web;

import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.appshop.model.User;
import com.appshop.service.UserService;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

public class LoginAction extends ActionSupport {

	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 914889028012483028L;
	private static final Log log = LogFactory.getLog(LoginAction.class);
	
	private String name;
	private String pass;
	//提示信息
	private String tip;
	private Integer id;
	//注入
	private UserService userService;
	private List<User> list;

	private User user;
	


	@Override
	/**
	 * 用户列表
	 * */
	public String execute() throws Exception {
		list = userService.getAll();
		return SUCCESS;
	}

	/*
	 * 验证用户名是否重复
	 * */
	public String validateName(){
		if(userService.validateName(name)){
			tip = "用户名可以使用";
		}else{
			tip = "用户名已被占用";
		}
		return SUCCESS;
	}
	
	/**
	 * 登陆
	 * */
	public String login(){
		User user = userService.login(name, pass);
		if(user == null){
			tip = "用户名/密码不配对";
			return INPUT;
		}else{
			Map session = ActionContext.getContext().getSession();
			session.put("user",user);
			return SUCCESS;
		}
	}

	
	public String logout(){
		Map session = ActionContext.getContext().getSession();
		session.remove("user");
		tip = "您已经安全退出!";
		return SUCCESS;
	}
	
	public String showUser(){
		user = userService.getByPK(id);
		return SUCCESS;
		
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTip() {
		return tip;
	}

	public void setTip(String tip) {
		this.tip = tip;
	}

	public List<User> getList() {
		return list;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	
	public User getUser() {
		return user;
	}
	
}
