/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csse.procurementws.controller;

import com.csse.procurementws.model.Site;
import java.util.List;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;
import org.springframework.http.ResponseEntity;

/**
 *
 * @author Shaini Thenuwara
 */
public class SiteControllerTest {
    
    public SiteControllerTest() {
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
     * Test of saveSite method, of class SiteController.
     */
    @Test
    public void testSaveSite() {
        System.out.println("saveSite");
        Site site = null;
        SiteController instance = new SiteController();
        String expResult = "INTERNAL_SERVER_ERROR";
        String result = instance.saveSite(site);
        
        if(expResult == null ? result == null : expResult.equals(result)){
             System.out.println("The test case is a Pass");
         }else{
             System.out.println("The test case is a fail");
         }
    }
    
}
