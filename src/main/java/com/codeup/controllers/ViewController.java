package com.codeup.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {

    @RequestMapping({"/", "/about", "/login", "/home", "/posts", "/register"})
    public String showView(){
        return "forward:/index.html";
    }

}
