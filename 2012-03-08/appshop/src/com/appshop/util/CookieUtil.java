package com.appshop.util;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



public class CookieUtil{

    public CookieUtil(){
    }

    public static String getString(HttpServletRequest request, String key){
        String value = null;
        Cookie cookie = null;
        Cookie cookies[] = request.getCookies();
        if(cookies != null)
        {
            int i = 0;
            do
            {
                if(i >= cookies.length)
                    break;
                if(cookies[i].getName().equals(key))
                {
                    cookie = cookies[i];
                    break;
                }
                i++;
            }
            while(true);
        }
        if(cookie != null)
            value = cookie.getValue();
        if(value == null)
            value = "";
        return value;
    }

    
    public static void setCookie(HttpServletResponse response, String name, String value, int seconds){
        Cookie cookie = new Cookie(name, value);
        cookie.setMaxAge(seconds);
        cookie.setPath("/");
        //cookie.setDomain(Contants.DOMAIN);
        //cookie.setDomain("appshop.com");
        response.addCookie(cookie);
    }
    
    public static void setCookie(HttpServletResponse response, String name, String value){
        Cookie cookie = new Cookie(name, value);
        cookie.setPath("/");
        //cookie.setDomain(Contants.DOMAIN);
        //cookie.setDomain("appshop.com");
        //cookie.setMaxAge(24*60*60);
        response.addCookie(cookie);
    }
    
    /**
     * Invalidates the specified cookie.
     */
    public static void deleteCookie(HttpServletRequest request,
                                    HttpServletResponse response,
                                    String cookieName) {
      // invalidate the cookie
      Cookie cookie = new Cookie(cookieName,"");
      
      // delete the cookie when the user closes their webbrowser
      //cookie.setPath("/");
      cookie.setMaxAge(0);
      //cookie.setDomain(Contants.DOMAIN);
      //cookie.setDomain("appshop.com");
      cookie.setPath("/");
      response.addCookie(cookie);
    }
}
