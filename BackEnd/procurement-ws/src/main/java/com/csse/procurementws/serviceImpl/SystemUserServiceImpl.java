package com.csse.procurementws.serviceImpl;

import com.csse.procurementws.model.Employee;
import com.csse.procurementws.model.SystemUser;
import com.csse.procurementws.repository.EmployeeRepository;
import com.csse.procurementws.repository.SystemUserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
*
* @author (IT17119122 ** Liyanage I.M)
*/
@Service
public class SystemUserServiceImpl {
   
   @Autowired
   SystemUserRepository systemUserRepository;
   
    @Autowired
   EmployeeRepository employeeRepository;
   
    public SystemUser findByUsernameandPassword(String username,String password) {
        SystemUser systemUser  = systemUserRepository.findByUsernameandPassword(username,password);
        return systemUser; 
    }
    
    public void saveUser(SystemUser systemUser) {
        systemUserRepository.save(systemUser);
    }
    
    public Employee findByUsernameandPasswordEmployee(String username,String password) {
        Employee employee  = employeeRepository.findByUsernameAndPassword(username,password);
        return employee; 
    }
}
