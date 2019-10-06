/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csse.procurementws.model;

/**
 *
 * @author NADUNI
 */
public class EmployeeFactory {
    
    public Employee getEmployee(String empType){
        if(empType == null){
            return null;
        }
        if (empType.equalsIgnoreCase("MGR")){
            System.out.println("This is manager");
            return new ProcurementManagement();
            
        }
        else if(empType.equalsIgnoreCase("PO")){
            System.out.println("This is procurement officer");
            return new ProcurementOfficer();
        }
        else if(empType.equalsIgnoreCase("SM")){
            System.out.println("This is Site Manager");
            return new SiteManager();
        }
        return null;
    }
    
    
}
