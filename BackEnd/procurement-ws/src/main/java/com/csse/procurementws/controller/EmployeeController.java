
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
    public String saveEmployee(@Valid @RequestBody Employee employee) {
        try {
            employeeService.saveEmployee(employee);
            return "SUCSESS";       
        } catch (Exception ex) {
            Logger logger = LoggerFactory.getLogger(EmployeeController.class);
            logger.error(ex.getMessage());
            return "INTERNAL_SERVER_ERROR";   
        }
    }
            
}
