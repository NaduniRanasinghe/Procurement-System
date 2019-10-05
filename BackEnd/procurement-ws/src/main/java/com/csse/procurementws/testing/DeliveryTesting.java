package com.csse.procurementws.testing;

import org.junit.Before;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.csse.procurementws.controller.DeliveryDetailsController;

@RunWith(SpringJUnit4ClassRunner.class)
public class DeliveryTesting {
	
	private MockMvc mockmvc;
	
	@InjectMocks
	private DeliveryDetailsController testDeliveryController;
	
	
	@Before
	public void setUp() throws Exception{
		
		mockmvc = MockMvcBuilders.standaloneSetup(testDeliveryController)
				.build();
	}
	
	@Test
	public void testGetMethod() throws Exception{
		
		mockmvc.perform(
				MockMvcRequestBuilders.get("/test")
		)
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("Testing"));
		
		
	}

	
	
	
	
	
	

}
