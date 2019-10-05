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
            return new ProcurementManagement();
        }
        else if(empType.equalsIgnoreCase("PO")){
            return new ProcurementOfficer();
        }
        else if(empType.equalsIgnoreCase("SM")){
            return new SiteManager();
        }
        return null;
    }
}
