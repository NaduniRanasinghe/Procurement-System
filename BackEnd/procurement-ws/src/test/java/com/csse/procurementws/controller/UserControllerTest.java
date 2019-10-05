package com.csse.procurementws.controller;

import com.csse.procurementws.model.LoginRequest;
import com.csse.procurementws.model.LoginResponse;
import com.csse.procurementws.model.SystemUser;
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
public class UserControllerTest {
    
    public UserControllerTest() {
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

    @Test
    public void testSaveSystemUser() {
        System.out.println("saveSystemUser");
        SystemUser systemUser = null;
        UserController instance = new UserController();
        String result = instance.saveSystemUser(systemUser);
        String expResult = "INTERNAL_SERVER_ERROR";

        if(expResult == null ? result == null : expResult.equals(result)){
             System.out.println("The test case is a Pass");
         }else{
             System.out.println("The test case is a fail");
         }
    }
    
}
