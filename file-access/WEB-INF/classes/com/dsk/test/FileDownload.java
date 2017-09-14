package com.dsk.test;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class FileDownload extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out=response.getWriter();
		try {
			BufferedReader bufferedReader = new BufferedReader(new FileReader(request.getParameter("file_location")));
			response.setContentType("text/plain");
			String stringLineFromFile=bufferedReader.readLine();
	        while(stringLineFromFile!=null)
	        {
	            out.println(stringLineFromFile);
	            stringLineFromFile=bufferedReader.readLine();
	        }            
        } catch (Exception e) {
        	out.println("File URL Invalid");
        }        
	}

}
