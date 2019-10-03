/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csse.procurementws.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//import java.util.List;
//import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 *
 * @author NADUNI
 */

@Entity
@Table (name ="Employee")
public class Employee {
    
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Integer empId;
    
    @Column (name = "FirstName")
    private String fname;
    
    @Column (name = "LastName")
    private String lname;
    
    @Column (name = "NIC")
    private String nic;
    
    
   @Column (name = "WorkPlace")
   private String workPlace;
   
   @Column (name = "EmpType")
   private String empType;
   
   
   @Column (name = "username")
   private String username;
   
   @Column (name = "password")
   private String password;
   
   @Column (name = "email")
   private String email;
   
   
   @Column (name = "phone")
   private String phone;
    
     public Integer getEmpId() {
        return empId;
    }

    public void seteMPiD(Integer id) {
        this.empId = id;
    }

    public String getFirstName() {
        return fname;
    }

    public void setFirstName(String fname) {
        this.fname = fname;
    }
    
       public String getLastName() {
        return lname;
    }

    public void setLastName(String lname) {
        this.lname = lname;
    }
    
       public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }
    
       public String getWorkPlace() {
        return workPlace;
    }

    public void setWorkPlace(String workplace) {
        this.workPlace = workplace;
    }
    
       public String getEmpType() {
        return empType;
    }

    public void setEmpType(String empType) {
        this.empType = empType;
    }

       public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    
    
    
}
