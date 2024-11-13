package com.email.Email.controller;

import com.email.Email.model.Template;
import com.email.Email.repository.TemplateRepository;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;


@RestController
public class TemplateController {

    @Autowired
    TemplateRepository TemplateRepository;

    @RequestMapping("/create-template")
    public ModelAndView createTemplates(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("html/create-template.html");
        return modelAndView;
    }

    @RequestMapping("/explore-template")
    public ModelAndView exploreTemplates(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("html/explore-template.html");
        return modelAndView;
    }

    @PostMapping("/create")
    public Template createTemplate(@RequestBody Map<String, String> body) {
        
        String header = body.get("header");
        String subject = body.get("action");
        String genre = body.get("closing");
        String description = body.get("signature");
        int uid = Integer.valueOf(body.get("uid"));
        
        Template newTemplate = new Template(header, subject, genre, description, uid);
        TemplateRepository.save(newTemplate);
        return newTemplate;
    }

    @DeleteMapping("/delete/{tid}")
    public boolean deleteTemplate(@PathVariable("tid") Integer tid){
        if(!TemplateRepository.findById(tid).equals(Optional.empty())){
            TemplateRepository.deleteById(tid);
            return true;
        }
        return false;
    }

    @GetMapping("/get-all-templates")
    public List<Template> getTemplates(){
        return TemplateRepository.findAll();
    }

    @GetMapping("/get-template/{tid}")
    public Template getTemplate(@PathVariable("tid") Integer tid){
        return TemplateRepository.findById(tid).get();
    }
}
