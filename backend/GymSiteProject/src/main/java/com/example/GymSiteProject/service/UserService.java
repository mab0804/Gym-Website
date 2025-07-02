package com.example.GymSiteProject.service;

import com.example.GymSiteProject.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.GymSiteProject.repository.UserRepo;

@Service
public class UserService {
    @Autowired
    UserRepo userRepo;

    public void userReg(String email,String password) {
        User user=new User();
        user.setEmail(email);
        user.setPassword(password);
        userRepo.save(user);
    }


    public String userLogin(String email, String password) {
        boolean user=userRepo.existsByEmailAndPassword(email, password);
        if(user) return "User Found";
        else return "Invalid Credentials";
    }
}
