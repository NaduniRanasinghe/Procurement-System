package com.csse.procurementws.controller;

import com.csse.procurementws.model.CommonResponse;

import com.csse.procurementws.model.DeliveryDetails;
import com.csse.procurementws.repository.DeliveryDetailsRepository;
import com.csse.procurementws.serviceImpl.DeliveryDetailsServiceImpl;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Shaini Thenuwara
 */
@RestController
@CrossOrigin
public class DeliveryDetailsController {
    
    @Autowired
    DeliveryDetailsServiceImpl deliveryserviceImpl;
    
    @Autowired
    DeliveryDetailsRepository deliverydetailsrepository;
    
        
    @RequestMapping(value = "/save/DeliveryDetails", method = RequestMethod.POST)
    public String saveItemDeliveryItem(@Valid @RequestBody  DeliveryDetails deliveryitems) {
        try {     
            deliveryserviceImpl.saveItem(deliveryitems);   
            return "SUCSESS";       
        } catch (Exception ex) {
            System.out.println(ex);
            return "INTERNAL_SERVER_ERROR";   
        }
    } 
    
    @GetMapping("/showDeliveryItems")
    public List<DeliveryDetails> getAllNotes() {
        return deliverydetailsrepository.findAll();
    }  
    
}
