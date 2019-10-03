/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csse.procurementws.repository;

import com.csse.procurementws.model.DeliveryDetails;
import org.springframework.data.jpa.repository.JpaRepository;
/**
 *
 * @author Shaini Thenuwara
 */
public interface DeliveryDetailsRepository  extends JpaRepository<DeliveryDetails, Integer> {
   
}
