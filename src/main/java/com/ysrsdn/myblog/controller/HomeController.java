package com.ysrsdn.myblog.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class HomeController {
	
	@RequestMapping("")
	public String getHome() {
		return "home";
	}
	@RequestMapping("logout-success")
	public String logout() {
		return "home";
	}
	
}
