package com.csse.procurementws.repository;

import com.csse.procurementws.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 *
 * @author NADUNI
 */
public interface EmployeeRepository extends JpaRepository<Employee, Integer>{

    @Query("select em from Employee em where em.fname = ?1 and em.password = ?2")
    Employee findByUsernameAndPassword(String fname,String password);
    
}
