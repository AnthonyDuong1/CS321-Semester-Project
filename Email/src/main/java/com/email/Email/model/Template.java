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
    private String action;
    private String closing;
    private String signature;

    @JoinColumn(name = "uid")
    private int uid;

    public Template() {}

    public Template(String header, String action, String closing, String signature, int uid){
        this.header = header;
        this.action = action;
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

    public String getHeader() {
        return header;
    }

    public String getAction() {
        return action;
    }

    public String getClosing() {
        return closing;
    }

    public String getSignature() {
        return signature;
    }

    public void setHeader(String header) {
        this.header = header;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public void setClosing(String closing) {
        this.closing = closing;
    }

    public void setSignature(String signature) {
        this.signature = signature;
    }
}
