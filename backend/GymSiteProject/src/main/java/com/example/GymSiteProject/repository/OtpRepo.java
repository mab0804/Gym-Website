package com.example.GymSiteProject.repository;

import com.example.GymSiteProject.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OtpRepo extends JpaRepository<User,Integer> {
    boolean existsByEmail(String email);
}
