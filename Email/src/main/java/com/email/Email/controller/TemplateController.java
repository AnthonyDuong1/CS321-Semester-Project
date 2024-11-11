package com.email.Email.controller;

import com.email.Email.model.Template;
import com.email.Email.repository.TemplateRepository;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class TemplateController {

    @Autowired
    TemplateRepository TemplateRepository;

    @PostMapping("/create")
    public Template createTemplate(@RequestBody Map<String, String> body) {
        
        String header = body.get("header");
        String subject = body.get("subject");
        String genre = body.get("genre");
        String description = body.get("description");
        int uid = Integer.valueOf(body.get("uid"));
        
        Template newTemplate = new Template(header, subject, genre, description, uid);
        TemplateRepository.save(newTemplate);
        return newTemplate;
    }

    @DeleteMapping("/delete")
    public Template deleteTemplate(){
        return null;
    }

    @GetMapping("/get-all-templates")
    public List<Template> getTemplates(){
        return TemplateRepository.findAll();
    }

}
