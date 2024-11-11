package com.email.Email.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;

@Entity
public class Template {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int tid;
    private String header;
    private String subject;
    private String genre;
    private String description;

    @JoinColumn(name = "uid")
    private int uid;

    public Template() {}

    public Template(String header, String subject, String genre, String description, int uid){
        this.header = header;
        this.subject = subject;
        this.genre = genre;
        this.description = description;
        this.uid = uid;
    }

    public int getTID(){
        return tid;
    }

    public int getUID() {
        return uid;
    }

    public String getHeader() {
        return header;
    }

    public String getSubject() {
        return subject;
    }

    public String getGenre() {
        return genre;
    }

    public String getDescription() {
        return description;
    }

    public void setHeader(String header) {
        this.header = header;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
