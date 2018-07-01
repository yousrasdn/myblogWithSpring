package com.ysrsdn.myblog.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

	
	@RequestMapping("/html")
	public String getHome() {
		return "index.html";
	}
	@RequestMapping("/")
	public String getHomeJSP() {
		return "home.jsp";
	}
}
