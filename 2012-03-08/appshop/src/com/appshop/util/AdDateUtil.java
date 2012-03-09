package com.appshop.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.apache.log4j.Logger;

public class AdDateUtil {
	private static Logger logger = Logger.getLogger(AdDateUtil.class);

	static public String getNowStr(String format) {
		SimpleDateFormat sdf = new SimpleDateFormat(format);
		String now = sdf.format(new Date());
		return now;
	}

	static public Date getFormatDate(String date, String format) {
		SimpleDateFormat sdf = new SimpleDateFormat(format);
		Date d = new Date();
		try {
			d = sdf.parse(date);
		} catch (ParseException e) {
			logger.error(e);
		}
		return d;
	}

	static public String getDateStr(Date date, String format) {
		SimpleDateFormat sdf = new SimpleDateFormat(format);
		String d = sdf.format(date);
		return d;
	}

	static public String getPadZeroString(String s, int size) {
		StringBuffer sb = new StringBuffer();
		for (int i = 0; i < size - s.length(); i++) {
			sb.append("0");
		}
		sb.append(s);
		return sb.toString();
	}

	/**
	 * 得到某月的天数
	 * 
	 * @param year
	 * @param month
	 * @return
	 */
	static public int getDayCountOfMonth(String year, String month) {
		Calendar cal = Calendar.getInstance();
		// 年
		cal.set(Calendar.YEAR, Integer.parseInt(year));
		// 月，因为Calendar里的月是从0开始，所以要-1
		cal.set(Calendar.MONTH, Integer.parseInt(month) - 1);
		return cal.getActualMaximum(Calendar.DAY_OF_MONTH);
	}
    
    static public String getYesterday(String format) {
        SimpleDateFormat df=new SimpleDateFormat(format);

        Calendar now = Calendar.getInstance();
        now.roll(Calendar.DAY_OF_YEAR,-1);//昨天
        return df.format(now.getTime());
    }

    /**
     * 获取和今天附近的某天
     * @param format
     * @param diff
     * @return
     */
    static public String getADay(String format,int diff) {
        SimpleDateFormat df=new SimpleDateFormat(format);

        Calendar now = Calendar.getInstance();
        int beforeM=now.get(Calendar.MONTH);
        now.roll(Calendar.DAY_OF_YEAR,diff);//
        int nowM=now.get(Calendar.MONTH);
        //必须进行日期处理，否则2009-01-04日前七天是2009-12-28
        if(nowM>beforeM)
        {
            now.roll(Calendar.YEAR,-1);
        }
        return df.format(now.getTime());
    }

    static public String getTomorrow(String format) {
        SimpleDateFormat df=new SimpleDateFormat(format);

        Calendar now = Calendar.getInstance();
        now.roll(Calendar.DAY_OF_YEAR, 1);//明天
        return df.format(now.getTime());
    }
    
    
    /**
	 * 得到最近num天的全部日期
	 * 说明:	
	 * 	1.日期是从昨天开始算的.
	 *  2.如果num=2 , 日期是2008-03-14 ,则返回的结果为 2008-03-12、2008-03-13
	 * @param num
	 * @return
	 */
    public static String[] getDaysByNum(int num,String date){
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String[] result = {} ;
		Calendar cal = Calendar.getInstance() ;
		cal.setTime(getDateFromString(date, "yyyy-MM-dd"));
		
		//最近一周
		result = new String[num];
		for(int i=num;i>0;i--){
			cal.add(Calendar.DAY_OF_YEAR, -1);
			result[i-1] = sdf.format(new Date(cal.getTimeInMillis()));
		}
		
		return result;
	}
	
	public static Date getDateFromString(String dateStr, String format) {

		if (dateStr == null || format == null) {
			try {
				throw new Exception("数据类型异常" + dateStr + "|" + format);
			} catch (Exception e) {
				logger.error("数据类型异常:" + e);
			}
		}

		SimpleDateFormat df = new SimpleDateFormat(format);
		Date date;
		try {
			date = df.parse(dateStr);
			return date;
		} catch (Exception ex) {
			logger.error(ex);
			return new Date();
		}
	}
	static public int getNowYear(){
		  Calendar cal = Calendar.getInstance();
		  return cal.get(Calendar.YEAR);
	}
	static public int getNowMonth(){
		  Calendar cal = Calendar.getInstance();
		  return cal.get(Calendar.MONTH)+1;
	}
    public static String[] getMonthRang(String year,String month){
		
		String beginDate = year + "-" + month + "-01";
		String endDate = year + "-" + month + "-" + getDayCountOfMonth(year,month);
		
		return getDaysByRang(beginDate,endDate);		
	}
    public static String[] getDaysByRang(String beginDate,String endDate){
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		
		//得到两个日期间相差多少天
		int num = dateDiff(beginDate,endDate);
		if(num<0){
			//颠倒一下日期
			String tmp = beginDate;
			beginDate = endDate;
			endDate = tmp;
			num = 0-num;
		}
		
		String[] result = {} ;
		Calendar cal = Calendar.getInstance() ;
		try {
			cal.setTime(sdf.parse(beginDate));
		} catch (ParseException e) {
			e.printStackTrace();
		}
		
		num = num + 1;	//把开始和结束日期都包含进去
		
		result = new String[num];
		for(int i=0;i<num;i++){
			if(i>0)	cal.add(Calendar.DAY_OF_YEAR, 1);
			result[i] = sdf.format(new Date(cal.getTimeInMillis()));
		}
		
		return result;
	}
    public static int dateDiff(String beginDate,String endDate){
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Date date = null;
		try {
			date = sdf.parse(endDate);
		} catch (ParseException e) {
			date = new Date();
			e.printStackTrace();
		}
		
		
		long end 	= date.getTime();
		try {
			date = sdf.parse(beginDate);
		} catch (ParseException e) {
			date = new Date();
			e.printStackTrace();
		}
		long  begin 	= date.getTime();
		
		long day = (end-begin)/(1000*3600*24);		//除1000是把毫秒变成秒
		
		return Integer.parseInt(Long.toString(day));		
	}
    
    public static void main(String[] args)
    {
        System.out.println(AdDateUtil.getADay("yyyy-MM-dd",-7));
    }
}
