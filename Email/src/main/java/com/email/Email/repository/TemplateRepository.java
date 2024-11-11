package com.email.Email.repository;

import com.email.Email.model.Template;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TemplateRepository extends JpaRepository<Template,Integer>{
    
}
