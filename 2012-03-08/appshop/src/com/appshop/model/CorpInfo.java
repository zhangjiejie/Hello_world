package com.appshop.model;

import java.util.Date;

public class CorpInfo {
	private Integer id;
	private String corp_name;
	private String corp_address;
	private String corp_phone;
	private String status;
	private Date create_time;
	private String flag;
	private String corp_level;
	private String login_no;

	public String getLogin_no() {
		return login_no;
	}

	public void setLogin_no(String login_no) {
		this.login_no = login_no;
	}

	public String getCorp_level() {
		return corp_level;
	}

	public void setCorp_level(String corp_level) {
		this.corp_level = corp_level;
	}

	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCorp_name() {
		return corp_name;
	}

	public void setCorp_name(String corp_name) {
		this.corp_name = corp_name;
	}

	public String getCorp_address() {
		return corp_address;
	}

	public void setCorp_address(String corp_address) {
		this.corp_address = corp_address;
	}

	public String getCorp_phone() {
		return corp_phone;
	}

	public void setCorp_phone(String corp_phone) {
		this.corp_phone = corp_phone;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getCreate_time() {
		return create_time;
	}

	public void setCreate_time(Date create_time) {
		this.create_time = create_time;
	}

}
