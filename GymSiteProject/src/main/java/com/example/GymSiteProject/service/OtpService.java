package com.example.GymSiteProject.service;

import com.example.GymSiteProject.repository.OtpRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Random;
@Service
public class OtpService {
    @Autowired
    JavaMailSender otpRepo;
    @Autowired
    OtpRepo userConfirmation;

    public boolean userConfirm(String email) {
       return userConfirmation.existsByEmail(email);
    }

    public String sendOtp(String email) {
            String otp = generateotp();
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(email);
            message.setSubject("Your OTP for Registration is");
            message.setText("Your OTP is " + otp);

            otpRepo.send(message);
            return otp;
    }

    private String generateotp() {
        return String.valueOf(100000 + new Random().nextInt(900000));
    }


}
