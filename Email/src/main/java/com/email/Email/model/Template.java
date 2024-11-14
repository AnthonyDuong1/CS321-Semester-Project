package com.email.Email.model;

import jakarta.persistence.Column;
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

    @Column(name="title")
    private String title;
    
    @Column(name="subject")
    private String subject;

    @Column(name="body")
    private String body;
    private String closing;
    private String signature;

    @JoinColumn(name = "uid")
    private int uid;

    public Template() {}

    public Template(String title, String subject, String body, String closing, String signature, int uid){
        this.title = title;
        this.subject = subject;
        this.body = body;
        this.closing = closing;
        this.signature = signature;
        this.uid = uid;
    }

    public int getTID(){
        return tid;
    }

    public int getUID() {
        return uid;
    }

    public String getTitle() {
        return title;
    }

    public String getSubject() {
        return subject;
    }

    public String getBody() {
        return body;
    }

    public String getClosing() {
        return closing;
    }

    public String getSignature() {
        return signature;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public void setClosing(String closing) {
        this.closing = closing;
    }

    public void setSignature(String signature) {
        this.signature = signature;
    }
}
