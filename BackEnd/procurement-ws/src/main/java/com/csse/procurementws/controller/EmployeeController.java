
package com.csse.procurementws.controller;

import com.csse.procurementws.model.CommonResponse;
import com.csse.procurementws.model.Employee;
import com.csse.procurementws.serviceImpl.EmployeeServiceImpl;
import javax.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author NADUNI
 */

@RestController
@CrossOrigin
public class EmployeeController {
    
    @Autowired
    EmployeeServiceImpl employeeService;
    
    
        @RequestMapping(value = "/employee/save", method = RequestMethod.POST)
    public ResponseEntity<CommonResponse> saveEmployee(@Valid @RequestBody Employee employee) {
        try {
            employeeService.saveEmployee(employee);
            return new ResponseEntity<>(new CommonResponse("SUCSESS", "Employee added successfully"), HttpStatus.OK);
        } catch (Exception ex) {
            Logger logger = LoggerFactory.getLogger(EmployeeController.class);
            logger.error(ex.getMessage());
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
            
//    @RequestMapping(value = "/getemployees", method = RequestMethod.GET)
//    public ResponseEntity<List<Employee>> getEmployees() {
//        try {
//            List<Employee> employeeList = employeeService.getAllEmployees();
//            return new ResponseEntity<>(employeeList, HttpStatus.OK);
//        } catch (Exception ex) {
//            Logger logger = LoggerFactory.getLogger(EmployeeController.class);
//            logger.error(ex.getMessage());
//            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
    
}
