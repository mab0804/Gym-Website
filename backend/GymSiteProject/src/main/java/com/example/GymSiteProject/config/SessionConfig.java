package com.example.GymSiteProject.config;

import org.springframework.boot.web.servlet.server.CookieSameSiteSupplier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SessionConfig {

    @Bean
    public CookieSameSiteSupplier cookieSameSiteSupplier() {
        // Forces JSESSIONID to use SameSite=None
        return CookieSameSiteSupplier.ofNone().whenHasName("JSESSIONID");
    }
}
