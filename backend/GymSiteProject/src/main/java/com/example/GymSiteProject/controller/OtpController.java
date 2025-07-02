package com.example.GymSiteProject.controller;

import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.GymSiteProject.service.OtpService;

@RestController
public class OtpController {
    @Autowired
    OtpService otpService;
    @PostMapping("/send-otp")
    public String sendOtp(@RequestParam String email, HttpSession session)
    {
        boolean userConfirm=otpService.userConfirm(email);
        if(!userConfirm) {
           String otpc = otpService.sendOtp(email);
           session.setAttribute("otp",otpc);
            return "OTP send Successfully";
        }
        else {
            return "User Already Found";
        }
    }
    @PostMapping("/verify")
    public String verify(@RequestParam String otp,HttpSession session)
    {
        Object storedOtpObj = session.getAttribute("otp");

        if (storedOtpObj == null) {
            return "OTP not found or session expired";
        }

        String storedOtp = storedOtpObj.toString();

        if (storedOtp.equals(otp)) {
            return "OTP verified successfully";
        } else {
            return "Invalid OTP";
        }
    }
}
