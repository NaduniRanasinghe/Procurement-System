/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csse.procurementws.serviceImpl;

import com.csse.procurementws.model.DeliveryDetails;
import com.csse.procurementws.repository.DeliveryDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Shaini Thenuwara
 */
@Service
public class DeliveryDetailsServiceImpl {
   
    
    @Autowired
    DeliveryDetailsRepository deliverydetailsrepository;
    
    public void saveItem(DeliveryDetails item) {
        deliverydetailsrepository.save(item);
    }
    
}
