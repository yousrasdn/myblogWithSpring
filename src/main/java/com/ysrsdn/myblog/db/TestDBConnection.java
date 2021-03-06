package com.ysrsdn.myblog.db;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class TestDBServlet
 */
@WebServlet("/TestDBServlet")
public class TestDBConnection extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
 		// Setup connection variables
		String jdbcUrl = "jdbc:mysql://localhost:3306/blog?useSSL=false";
		String user = "blog";
		String pass = "blog";
		
 		
		// Connecting to database
		PrintWriter out = response.getWriter();
		out.println("Connecting to database: " + jdbcUrl);
		Connection myConn = null;
 		try {
			String jdbcDriver = "com.mysql.jdbc.Driver";
			Class.forName(jdbcDriver);
 		
			myConn = DriverManager.getConnection(jdbcUrl, user, pass);
 			
			out.println("Connected!");
 		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			try {
				myConn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}

		
	}

}

