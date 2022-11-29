package Servlet;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.junit.runner.Request;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServlet;

import com.google.gson.Gson;

public class Convert extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private Gson gson;

    public void init(ServletConfig config)
            throws ServletException {
        super.init(config);
        gson = new Gson();
    }

    public void doPost(HttpServletRequest rq, HttpServletResponse rs) throws ServletException, IOException{
        String txt = rq.getParameter("txt").toUpperCase();
        int nChars = trasformLowerToUpper(txt);
        String json1 = gson.toJson(txt);
        String json2 =  gson.toJson(nChars);
        rs.getWriter().println("["+json1+","+json2+"]");

    }   
    private int trasformLowerToUpper(String str)
	{
		int counter =0;
		for(int i=0;i<str.length();i++)
		{
			char car = str.charAt(i);
			String stringa = car+"";
			if(!stringa.equals(stringa.toUpperCase()) )
			{
				counter++;
			}
		}
		str = str.toUpperCase();
		return counter;
	}
}
