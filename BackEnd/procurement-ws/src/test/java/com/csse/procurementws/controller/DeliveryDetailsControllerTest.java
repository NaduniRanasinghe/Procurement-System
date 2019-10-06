package com.csse.procurementws.controller;

import com.csse.procurementws.model.DeliveryDetails;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

/**
 *
 * @author Shaini Thenuwara
 */
public class DeliveryDetailsControllerTest {
    
    public DeliveryDetailsControllerTest() {
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
     * Test of saveItemDeliveryItem method, of class DeliveryDetailsController.
     */
    @Test
    public void testSaveItemDeliveryItem() {
        System.out.println("saveItemDeliveryItem");
        DeliveryDetails deliveryitems = null;
        DeliveryDetailsController instance = new DeliveryDetailsController();

        String expResult = "INTERNAL_SERVER_ERROR";
        String result = instance.saveItemDeliveryItem(deliveryitems);
        
        if(expResult == null ? result == null : expResult.equals(result)){
             System.out.println("The test case is a Pass");
         }else{
             System.out.println("The test case is a fail");
         }
    }

    
}
