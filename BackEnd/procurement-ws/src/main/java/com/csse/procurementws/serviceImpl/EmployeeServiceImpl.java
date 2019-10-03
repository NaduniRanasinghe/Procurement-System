/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csse.procurementws.serviceImpl;

import com.csse.procurementws.model.Employee;
import com.csse.procurementws.repository.EmployeeRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
/**
 *
 * @author NADUNI
 */
@Service
public class EmployeeServiceImpl {

    
    @Autowired
    EmployeeRepository employeeRepository;
    
    public void saveEmployee(Employee employee){
        employeeRepository.save(employee);
    }
       public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }
    
    public Employee getEmployeeById(Integer id) {
        Optional<Employee> employee = employeeRepository.findById(id);
        return employee.get();
    }
    

}
