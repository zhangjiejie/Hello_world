/**
 * <pre>
 * Copyright:		Copyright(C) 2006, jdkcn.com
 * Filename:		PagerFacade.java
 * Class:			PagerFacade
 * Date:			Sep 10, 2006 5:47:54 PM
 * Author:			<a href="mailto:rory.cn@gmail.com">Rory</a>
 * Description:		
 *
 *
 * ======================================================================
 * Change History Log
 * ----------------------------------------------------------------------
 * Mod. No.	| Date		| Name			| Reason			| Change Req.
 * ----------------------------------------------------------------------
 * 			| Sep 10, 2006   | Rory Ye	    | Created			|
 *
 * </pre>
 **/
package com.appshop.util;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;



public abstract class PagerFacade {
    private static Log log = LogFactory.getLog(PagerFacade.class);  
    
    /**
     * Offset 
     * @return offset 
     */
    public static int getOffset(String pagerOffset) {
      
        int offset= 0;
        try {
            offset = Integer.parseInt(pagerOffset);
        } catch (NumberFormatException e) {
            if (log.isDebugEnabled()) {
                log.debug("Error during get pager.offset", e);
            }
        }
        return offset;
    }
    
    /**
     * 
     * @return 
     */
    public static int getOffset() {
    	return 0;
    }
    
    /**
     * maxPageItems
     * @return maxPageItems
     */
    public static int getMaxPageItems() {
        int interval = PaginationSupport.DEFAULT_MAX_PAGE_ITEMS;
       
        return interval;
    }
    
    
    /**
     * DEFAULT_MAX_PAGE_ITEMS
     * @return DEFAULT_MAX_INDEX_PAGES
     */
    public static int getMaxIndexPages() {
        int maxIndexPages = PaginationSupport.DEFAULT_MAX_INDEX_PAGES;
      
        return maxIndexPages;
    }
    
    
    public static String getIndex() {
        return  PaginationSupport.DEFALUT_INDEX;
    }
    
}
