package com.appshop.util;

import java.util.Properties;

import org.apache.log4j.Logger;

public class PropertiesManager {
	private static final Logger logger = Logger
			.getLogger(PropertiesManager.class);

	public static String getFilePath(String name, String propertiesname) {
		Properties prop = new Properties();
		try {
			prop.load(PropertiesManager.class
					.getResourceAsStream(propertiesname));
		} catch (Exception e) {
			logger.error("read excelPath.properties error!!!", e);
		}
		String propValue = (String) prop.get(name);
		// propValue=PropertiesManager.subString(propValue);
		logger.info(propValue);

		if (propValue == null || propValue.trim().length() == 0) {
			logger.error("getFilePath url not empty!");
		}
		return propValue;
	}

	public static void main(String[] args) {

		String priv = PropertiesManager.getFilePath("imgpath","/param.properties");
		System.out.println("111" + priv);

	}

}
