package com.appshop.model;

import java.util.Date;

public class MerchandiseInfo {
	private Integer id;
	private String name;
	private String amount;
	private String icon;
	private String describe;
	private Integer type;
	private String up_flag;
	private String assess_flag;
	private String corp_no;
	private String orig_price;
	private String current_price;
	private String status;
	private Date create_time;
	private CorpInfo corpInfo;

	public CorpInfo getCorpInfo() {
		return corpInfo;
	}

	public void setCorpInfo(CorpInfo corpInfo) {
		this.corpInfo = corpInfo;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAmount() {
		return amount;
	}

	public void setAmount(String amount) {
		this.amount = amount;
	}

	public String getIcon() {
		return icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}

	public String getDescribe() {
		return describe;
	}

	public void setDescribe(String describe) {
		this.describe = describe;
	}

	public Integer getType() {
		return type;
	}

	public void setType(Integer type) {
		this.type = type;
	}

	public String getUp_flag() {
		return up_flag;
	}

	public void setUp_flag(String up_flag) {
		this.up_flag = up_flag;
	}

	public String getAssess_flag() {
		return assess_flag;
	}

	public void setAssess_flag(String assess_flag) {
		this.assess_flag = assess_flag;
	}

	public String getCorp_no() {
		return corp_no;
	}

	public void setCorp_no(String corp_no) {
		this.corp_no = corp_no;
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

	public String getCurrent_price() {
		return current_price;
	}

	public void setCurrent_price(String current_price) {
		this.current_price = current_price;
	}

	public String getOrig_price() {
		return orig_price;
	}

	public void setOrig_price(String orig_price) {
		this.orig_price = orig_price;
	}

}
