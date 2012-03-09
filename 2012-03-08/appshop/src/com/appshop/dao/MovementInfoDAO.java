package com.appshop.dao;

import java.util.List;

import com.appshop.model.MerchandiseInfo;
import com.appshop.model.MovementInfo;

public interface MovementInfoDAO extends IBaseDAO<MovementInfo> {
	public List<MovementInfo> getMovementInfoList();
	
	public List<MovementInfo> getAllMovementInfoList(int begin,
			int pageSize, String hql);
	
	public MovementInfo getMovementInfoDetail(String hql);
}
