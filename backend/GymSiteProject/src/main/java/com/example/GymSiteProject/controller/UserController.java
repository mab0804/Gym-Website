package com.example.GymSiteProject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.GymSiteProject.service.UserService;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("user/register")
    public String userReg(@RequestParam String email, @RequestParam String password)
    {
        userService.userReg(email,password);
        return "Login Successfull";
    }

    @PostMapping("user/login")
    public String userLogin(@RequestParam String email,@RequestParam String password)
    {
       return userService.userLogin(email,password);
    }
}
