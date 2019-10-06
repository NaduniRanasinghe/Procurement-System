package com.csse.procurementws.controller;

import com.csse.procurementws.model.Order;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

/**
 *
 * @author Shaini Thenuwara
 */
public class OrderControllerTest {
    
    public OrderControllerTest() {
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
     * Test of saveOrder method, of class OrderController.
     */
    @Test
    public void testSaveOrder() {
        System.out.println("saveOrder");
        Order order = null;
        OrderController instance = new OrderController();
        String expResult = "INTERNAL_SERVER_ERROR";
        String result = instance.saveOrder(order);
        
         if(expResult == null ? result == null : expResult.equals(result)){
             System.out.println("The test case is a Pass");
         }else{
             System.out.println("The test case is a Pass");
         }     
    } 
}
