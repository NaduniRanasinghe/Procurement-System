package com.csse.procurementws.controller;

import com.csse.procurementws.model.Supplier;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

/**
 *
 * @author Shaini Thenuwara
 */
public class SupplierControllerTest {
    
    public SupplierControllerTest() {
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
     * Test of saveSupplier method, of class SupplierController.
     */
    @Test
    public void testSaveSupplier() {
        System.out.println("saveSupplier");
        Supplier supplier = null;
        SupplierController instance = new SupplierController();
        String expResult = "INTERNAL_SERVER_ERROR";
        String result = instance.saveSupplier(supplier);
        
        if(expResult == null ? result == null : expResult.equals(result)){
             System.out.println("The test case is a Pass");
         }else{
             System.out.println("The test case is a fail");
         }
    }  
}
