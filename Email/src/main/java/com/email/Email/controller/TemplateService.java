package com.email.Email.controller;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.email.Email.repository.TemplateRepository;


@Service
public class TemplateService {
    
    @Autowired
    TemplateRepository TemplateRepository;

}
