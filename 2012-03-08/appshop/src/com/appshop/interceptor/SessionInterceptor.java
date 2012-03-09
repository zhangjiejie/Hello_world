package com.appshop.interceptor;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;

public class SessionInterceptor extends AbstractInterceptor {

	private static final long serialVersionUID = -5943967104855454557L;
	
	@Override
	public String intercept(ActionInvocation invocation) throws Exception {
		//ActionContext ac = invocation.getInvocationContext();
		//HttpServletRequest request = (HttpServletRequest)ac.get(ServletActionContext.HTTP_REQUEST);
		
//		Map session = ActionContext.getContext().getSession();
//		
//		Object adminUser = session.get("user");
//		if(adminUser == null){
//			return "login";
//		}else{
			return invocation.invoke();
//		}
		
	}
}
