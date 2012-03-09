package com.appshop.exception;

public class DemoException extends Exception {

	private static final long serialVersionUID = 6799834286218339191L;

	public DemoException() {
		super();
	}
	
	public DemoException(String msg) {
		super(msg);
	}
	
	public DemoException(Throwable e) {
		super(e);
	}
	
	public DemoException(String msg, Throwable e) {
		super(msg, e);
	}
}
