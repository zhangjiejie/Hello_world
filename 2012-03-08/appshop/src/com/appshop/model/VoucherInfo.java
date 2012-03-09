package com.appshop.model;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

public class VoucherInfo {
	private Integer id;
	private String voucher_no;
	private String voucher_content;
	private Integer amount;
	private Date begin_time;
	private Date end_time;
	private String status;
	private String assess_flag;
	private Integer down_amount;
	private String send_flag;
	private String corp_no;
	private CorpInfo corpInfo;
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getVoucher_no() {
		return voucher_no;
	}

	public void setVoucher_no(String voucher_no) {
		this.voucher_no = voucher_no;
	}

	public String getVoucher_content() {
		return voucher_content;
	}

	public void setVoucher_content(String voucher_content) {
		this.voucher_content = voucher_content;
	}

	public Date getEnd_time() {
		return end_time;
	}

	public void setEnd_time(Date end_time) {
		this.end_time = end_time;
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

	public Date getBegin_time() {
		return begin_time;
	}

	public void setBegin_time(Date begin_time) {
		this.begin_time = begin_time;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Integer getAmount() {
		return amount;
	}

	public void setAmount(Integer amount) {
		this.amount = amount;
	}

	public Integer getDown_amount() {
		return down_amount;
	}

	public void setDown_amount(Integer down_amount) {
		this.down_amount = down_amount;
	}

	public String getSend_flag() {
		return send_flag;
	}

	public void setSend_flag(String send_flag) {
		this.send_flag = send_flag;
	}
	
	public CorpInfo getCorpInfo() {
		return corpInfo;
	}

	public void setCorpInfo(CorpInfo corpInfo) {
		this.corpInfo = corpInfo;
	}

}
