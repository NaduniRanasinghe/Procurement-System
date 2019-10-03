/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csse.procurementws.serviceImpl;


import com.csse.procurementws.model.Site;
import com.csse.procurementws.repository.SiteRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author NADUNI
 */
@Service
public class SiteServiceImpl {
        @Autowired
    SiteRepository siteRepository;
    
    public void saveSite(Site site){
        siteRepository.save(site);
    }
       public List<Site> getAllSites() {
        return siteRepository.findAll();
    }
    
    public Site getSiteById(Integer id) {
        Optional<Site> site = siteRepository.findById(id);
        return site.get();
    }
}
