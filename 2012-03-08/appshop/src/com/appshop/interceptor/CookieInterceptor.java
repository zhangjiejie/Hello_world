package com.appshop.interceptor;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;

import com.appshop.util.CookieUtil;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;

public class CookieInterceptor extends AbstractInterceptor {

	/**
	 * 
	 */
	private static final long serialVersionUID = -5943967104855454557L;

	@Override
	public String intercept(ActionInvocation invocation) throws Exception {
		
//		ActionContext ac = invocation.getInvocationContext();
//		HttpServletRequest request = (HttpServletRequest)ac.get(ServletActionContext.HTTP_REQUEST);
//		String cookie = CookieUtil.getString(request,"id");
//		System.out.println("cookie ActionInvocation:"+cookie);
//		if ("".equals(cookie)){
//			return "login";
//		}else{
			return invocation.invoke();
//		}
	}

}
