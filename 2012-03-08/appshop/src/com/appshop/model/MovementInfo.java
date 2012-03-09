package com.appshop.model;

import java.util.Date;

public class MovementInfo {
	private Integer id;
	private String move_subject;
	private String move_content;
	private Date begin_time;
	private  Date end_time;
	private Date create_time;
	private String assess_flag;
	private String send_flag;
	private String status;
	private String operator_no;
	
	private CorpInfo corpInfo;
	
	private String corp_name;
	private String brief_corp_name;
	private String brief_move_content;
	private String brief_move_subject;
	private String beginTime;
	private String endTime;

	public String getBeginTime() {
		return beginTime;
	}

	public void setBeginTime(String beginTime) {
		this.beginTime = beginTime;
	}

	public String getEndTime() {
		return endTime;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

	public String getCorp_name() {
		return corp_name;
	}

	public void setCorp_name(String corp_name) {
		this.corp_name = corp_name;
	}

	public String getBrief_move_content() {
		return brief_move_content;
	}

	public void setBrief_move_content(String brief_move_content) {
		this.brief_move_content = brief_move_content;
	}

	public String getBrief_move_subject() {
		return brief_move_subject;
	}

	public void setBrief_move_subject(String brief_move_subject) {
		this.brief_move_subject = brief_move_subject;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getMove_subject() {
		return move_subject;
	}

	public void setMove_subject(String move_subject) {
		this.move_subject = move_subject;
	}

	public String getMove_content() {
		return move_content;
	}

	public void setMove_content(String move_content) {
		this.move_content = move_content;
	}

	public Date getBegin_time() {
		return begin_time;
	}

	public void setBegin_time(Date begin_time) {
		this.begin_time = begin_time;
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

	public String getSend_flag() {
		return send_flag;
	}

	public void setSend_flag(String send_flag) {
		this.send_flag = send_flag;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getOperator_no() {
		return operator_no;
	}

	public void setOperator_no(String operator_no) {
		this.operator_no = operator_no;
	}

	public Date getCreate_time() {
		return create_time;
	}

	public void setCreate_time(Date create_time) {
		this.create_time = create_time;
	}

	public CorpInfo getCorpInfo() {
		return corpInfo;
	}

	public void setCorpInfo(CorpInfo corpInfo) {
		this.corpInfo = corpInfo;
	}

	public String getBrief_corp_name() {
		return brief_corp_name;
	}

	public void setBrief_corp_name(String brief_corp_name) {
		this.brief_corp_name = brief_corp_name;
	}

}
