package com.appshop.util;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class PageList<T> {
	private int page;
	private int pageCount;
	private int rowCount;
	private int pageSize;
	private boolean hasPrevious = false;
	private boolean hasNext = false;
	
	private List<T> list = new ArrayList<T>();
	
	private List paginateList = new ArrayList();
	
	private PageList(){}
	
	public PageList(int page,int rowCount, int pageSize){
		this.page = page;
        this.rowCount = rowCount;
        this.pageSize = pageSize;
        this.pageCount = ((rowCount + pageSize) - 1) / pageSize;
        if(this.pageCount==0){
        	this.pageCount=1;
        }
        refresh();
        this.paginateList = getPaginate(this.pageCount, this.page);
	}
	
	   public void refresh() {
	        if (pageCount <= 1) {
	            hasPrevious = false;
	            hasNext = false;
	        } else if (page == 1) {
	            hasPrevious = false;
	            hasNext = true;
	        } else if (page == pageCount) {
	            hasPrevious = true;
	            hasNext = false;
	        } else {
	            hasPrevious = true;
	            hasNext = true;
	        }
	   }
	
	
	
	
	public List<T> getList() {
		return list;
	}
	public void setList(List<T> list) {
		this.list = list;
	}
	public int getPage() {
		return page;
	}
	public void setPage(int page) {
		this.page = page;
	}
	public int getPageCount() {
		return pageCount;
	}
	public void setPageCount(int pageCount) {
		this.pageCount = pageCount;
	}
	public int getPageSize() {
		return pageSize;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	public int getRowCount() {
		return rowCount;
	}
	public void setRowCount(int rowCount) {
		this.rowCount = rowCount;
	}

	public boolean getHasNext() {
		return hasNext;
	}

	public void setHasNext(boolean hasNext) {
		this.hasNext = hasNext;
	}

	public boolean getHasPrevious() {
		return hasPrevious;
	}

	public void setHasPrevious(boolean hasPrevious) {
		this.hasPrevious = hasPrevious;
	}
	
	
	
    private List getPaginate(int pageCount, int page) {
    	List list = new ArrayList();
    	String[] str = null;
	    if (pageCount > 1) {
		   if (page > 6){
			   str = new String[2];
			   str[0] = String.valueOf(1);
			   str[1] = String.valueOf("[1]");
			   list.add(str);
			   str = new String[2];
			   str[0] = String.valueOf(page-1);
			   str[1] ="<<";
			   list.add(str);
		   	  //map.put(String.valueOf(1), "[1]");
		   	  //map.put(String.valueOf(page-6), "<<");
		   }
		   for (int i = page - 5; i < page + 6; ++i) {
			  if (i < 1 || i > pageCount)
				  continue;
			  else if (i != page){
				  str = new String[2];
				  str[0] = String.valueOf(i);
				  str[1] = "["+i+"]";
				  list.add(str);
			  	  //map.put(String.valueOf(i), "["+i+"]");
			  }else{
				  str = new String[2];
				  str[0] = null;
				  str[1] = ""+i+"";
				  list.add(str);
			  	//map.put(String.valueOf(i), "["+i+"]");
			  }
		   }
		  if (page + 5 < pageCount){
			  str = new String[2];
			  str[0] = String.valueOf(page+1);
			  str[1] = ">>";
			  list.add(str);
			  str = new String[2];
			  str[0] = String.valueOf(pageCount);
			  str[1] = "["+pageCount+"]";
			  list.add(str);
			//map.put(String.valueOf(page+6), ">>");
			//map.put(String.valueOf(pageCount), "["+pageCount+"]");
		  }
	}
	return list;
  }

    
	public List getPaginateList() {
		return paginateList;
	}

	public void setPaginateList(List paginateList) {
		this.paginateList = paginateList;
	}
    
	
	public static void main(String[] args){
		PageList pageList = new PageList(20,10000, 20);
		List list = pageList.getPaginateList();
		Iterator it = list.iterator();
		String s = "";
		while(it.hasNext()){
			String[] str = (String[])it.next();
			if(str[0] != null)
				s = s + "<a href='"+str[0]+"'>"+str[1]+"</a>&nbsp;";
			else
				s = s + str[1]+"&nbsp;";
			
		}
		System.out.println(s);
	}
	
}

