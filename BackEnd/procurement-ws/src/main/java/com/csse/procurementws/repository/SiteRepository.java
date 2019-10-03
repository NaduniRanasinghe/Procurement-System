/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csse.procurementws.repository;

import com.csse.procurementws.model.Site;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author NADUNI
 */
public interface SiteRepository extends JpaRepository<Site, Integer>{
    
}
