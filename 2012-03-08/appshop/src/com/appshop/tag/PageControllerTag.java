package com.appshop.tag;


import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.TagSupport;

import org.apache.log4j.Logger;

/**
 * @author cloud
 *  
 */
public class PageControllerTag extends TagSupport {

    private static Logger logger = Logger.getLogger(PageControllerTag.class);

    private String name = "pageController";

    private String form;

    private String scope = "request";

    private boolean refresh = true;

    /*
     * (non-Javadoc)
     * 
     * @see javax.servlet.jsp.tagext.Tag#doEndTag()
     */
    public int doEndTag() throws JspException {
        JspWriter out = pageContext.getOut();
        String str = make();
        try {
            out.write(str);
        } catch (IOException e) {
            logger.error(str);
        }
        return super.doEndTag();
    }

    private String make() {
        HttpServletRequest request = (HttpServletRequest) pageContext
                .getRequest();
        PageController pc = (PageController) request.getAttribute(name);

        StringBuffer sb = new StringBuffer();

        if (this.refresh) {
            sb
                    .append("[<a href=\"javascript:window.location.reload()\">刷新</a>]\n");

        }

        if (pc.isHasPreviousPage()) {
            sb
                    .append("《 <a href=\"javascript:document.getElementById('pageController.currentPage').value=1;"
                            + form + ".submit()\"> 首页</a>\n");
            sb
                    .append("<a href=\"javascript:document.getElementById('pageController.currentPage').value="
                            + pc.getPreviousPage()
                            + ";"
                            + form
                            + ".submit()\">上页</a>\n");

        } else {
            sb.append(" 《 首页 上页\n");

        }

        if (pc.isHasNextPage()) {
            sb
                    .append("<a href=\"javascript:document.getElementById('pageController.currentPage').value="
                            + pc.getNextPage()
                            + ";"
                            + form
                            + ".submit()\">下页</a>\n");
            sb
                    .append("<a href=\"javascript:document.getElementById('pageController.currentPage').value="
                            + pc.getTotalPages()
                            + ";"
                            + form
                            + ".submit()\">末页</a> 》 \n");

        } else {
            sb.append("下页 末页 》 \n");
        }
        sb
                .append("共 "
                        + pc.getTotalRows()
                        + " 条，第 <select name=\"pageController.currentPage\" id=\"pageController.currentPage\" size=\"1\" onchange=\"javascript:"
                        + form + ".submit()\">\n");

        int totalPages = pc.getTotalPages();
        int currentPage = pc.getCurrentPage();

        for (int i = 1; i <= totalPages; i++) {
            if (i == currentPage) {
                sb.append("<option value=\"" + i + "\" selected>" + i
                        + "</options>\n");
            } else {
                sb.append("<option value=\"" + i + "\">" + i + "</options>\n");
            }
        }
        sb.append("</select>/ " + totalPages +  "页");
        return sb.toString();
    }

    /**
     * @return Returns the form.
     */
    public String getForm() {
        return form;
    }

    /**
     * @param form
     *            The form to set.
     */
    public void setForm(String form) {
        this.form = form;
    }

    /**
     * @return Returns the name.
     */
    public String getName() {
        return name;
    }

    /**
     * @param name
     *            The name to set.
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Comment for <code>serialVersionUID</code>
     */
    private static final long serialVersionUID = -8049479179986983934L;

    /**
     * @return Returns the refresh.
     */
    public boolean isRefresh() {
        return refresh;
    }

    /**
     * @param refresh
     *            The refresh to set.
     */
    public void setRefresh(boolean refresh) {
        this.refresh = refresh;
    }

    /**
     * @return Returns the scope.
     */
    public String getScope() {
        return scope;
    }

    /**
     * @param scope
     *            The scope to set.
     */
    public void setScope(String scope) {
        this.scope = scope;
    }
}
