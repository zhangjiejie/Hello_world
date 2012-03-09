package com.appshop.model;

import java.util.Date;


public class User{
	
	private Integer id;
	private String name;
	private String pass;
	private String email;
	private Integer age;
	private Date birth;

	
	public void setName(String name) 
	{
		this.name = name; 
	}

	public void setPass(String pass)
	{
		this.pass = pass; 
	}



	public Integer getAge() {
		return age;
	}

	public void setBirth(Date birth) 
	{
		this.birth = birth; 
	}

	public String getName()
	{
		return (this.name); 
	}

	public String getPass() 
	{
		return (this.pass); 
	}



	public Date getBirth()
	{
		return (this.birth); 
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

}