/*
 * Created on 2005-5-29
 * StringUtil.java
 * 
 */
package com.appshop.util;

import java.io.UnsupportedEncodingException;

import com.sun.org.apache.xerces.internal.impl.dv.util.Base64;

/**
 * ϵͳ���ַ����Ĺ����Ľӿڣ����Ǿ�̬��������ֱ��ʹ��
 * 
 * @author yaozhenguo
 */
public class StringUtil {
	private static String srcCharset;
	private static String destCharset;

	/**
	 * 
	 */
	public StringUtil() {
		super();

	}

	/**
	 * ��GBK������ַ�ת��iso����
	 * 
	 * @param gbkStr
	 *            ��Ҫת�����ַ�
	 * @return ת���Ժ���ַ�
	 */
	public static String gbk2Iso(String gbkStr) {

		try {

			return new String(gbkStr.getBytes("GBK"), "ISO-8859-1");

		} catch (Exception e) {

			return null;
		}
	}

	/**
	 * ��ISO������ַ�ת��GBK�����
	 * 
	 * @param isoStr
	 *            ԭ�ǵ��ַ�
	 * @return ת���Ժ���ַ�
	 */
	public static String iso2Gbk(String isoStr) {
		try {

			return new String(isoStr.getBytes("ISO-8859-1"), "GBK");

		} catch (Exception e) {

			return null;
		}
	}

	/**
	 * ���ַ����鴮����һ���ָ���ַ�
	 * 
	 * @param args
	 *            �ַ�����
	 * @return
	 */
	public static String arrayToString(String[] args) {
		if (args == null) {
			return null;
		}
		String tmp = "";
		for (int i = 0; i < args.length; i++) {
			if (0 == i) {
				tmp += args[i];
			} else {
				tmp += ", " + args[i];
			}
		}
		return tmp;
	}

	/**
	 * �滻Null
	 * 
	 * @param str
	 * @return
	 */
	public static String repNull(String str) {
		if (str == null)
			str = "";
		return str;
	}

	public static String sysDecode(String src) {
		// logger.info("src1=" + src);
		if (src != null && !src.equals("")) {
			try {
				String tmp = null;

				tmp = new String(src.getBytes(srcCharset), destCharset);
				// logger.info("tmp1=" + tmp);

				// tmp = new String(src.getBytes(),"gb2312");
				// logger.info("src3=" + tmp);

				// tmp = new String(src.getBytes("utf8"),"gb2312");
				// logger.info("src4=" + tmp);

				return tmp;
			} catch (UnsupportedEncodingException e) {
				// logger.error(src, e);
			}
			return src;

		}
		return src;
	}

	public static void main(String[] args) {
	}

	public static String toUtf8(String isoStr) {
		try {

			return new String(isoStr.getBytes("ISO-8859-1"), "utf-8");

		} catch (Exception e) {

			return null;
		}
	}

	/**
	 * ��base64������ַ�ת��GBK�����
	 * 
	 * @param isoStr
	 *            ԭ�ǵ��ַ�
	 * @return ת���Ժ���ַ�
	 */
	public static String base64Gbk(String isoStr) {
		try {

			return new String(Base64.decode("dHJlc3Q="));

		} catch (Exception e) {

			return null;
		}
	}
}
