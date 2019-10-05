package com.csse.procurementws.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author NADUNI
 */

@Entity
@Table (name ="employee")
public class Employee {
    
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(name = "ID")
   private Integer empId;
    
   @Column (name = "FIRST_NAME")
   private String fname;
    
   @Column (name = "LAST_NAME")
   private String lname;
    
   @Column (name = "NIC")
   private String nic;
    
   @Column (name = "LOCATION")
   String location;
   
   @Column (name = "EMP_TYPE")
   private String empType;
   
   @Column (name = "PASSWORD")
   private String password;
   
   @Column (name = "EMAIL")
   private String email;
    
  @Column (name = "PHONE")
   private String phone;

    public Integer getEmpId() {
        return empId;
    }

    public void setEmpId(Integer empId) {
        this.empId = empId;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getEmpType() {
        return empType;
    }

    public void setEmpType(String empType) {
        this.empType = empType;
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
