package com.csse.procurementws.controller;

import com.csse.procurementws.model.Employee;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

/**
 *
 * @author Shaini Thenuwara
 */
public class EmployeeControllerTest {
    
    public EmployeeControllerTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
    }
    
    @After
    public void tearDown() {
    }

    /**
     * Test of saveEmployee method, of class EmployeeController.
     */
    @Test
    public void testSaveEmployee() {
        System.out.println("saveEmployee");
        Employee employee = null;
        EmployeeController instance = new EmployeeController();
        String expResult = "INTERNAL_SERVER_ERROR";
        String result = instance.saveEmployee(employee);
        
        if(expResult == null ? result == null : expResult.equals(result)){
             System.out.println("The test case is a Pass");
         }else{
             System.out.println("The test case is a fail");
         }
    }
    
}
