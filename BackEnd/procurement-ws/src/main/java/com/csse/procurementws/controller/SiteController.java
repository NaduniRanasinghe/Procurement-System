package com.csse.procurementws.controller;

import com.csse.procurementws.model.CommonResponse;
import com.csse.procurementws.model.Site;
import com.csse.procurementws.serviceImpl.SiteServiceImpl;
import java.util.List;
import javax.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author NADUNI
 */

@RestController
@CrossOrigin
public class SiteController {
    
        
    @Autowired
    SiteServiceImpl siteService;
    
    
        @RequestMapping(value = "/site/save", method = RequestMethod.POST)
    public String saveSite(@Valid @RequestBody Site site) {
        try {
            siteService.saveSite(site);
            return "SUCSESS";
        } catch (Exception ex) {
            Logger logger = LoggerFactory.getLogger(SiteController.class);
            logger.error(ex.getMessage());
            return "INTERNAL_SERVER_ERROR";
        }
    }
            
    @RequestMapping(value = "/getsites", method = RequestMethod.GET)
    public ResponseEntity<List<Site>> getSites() {
        try {
            List<Site> siteList = siteService.getAllSites();
            return new ResponseEntity<>(siteList, HttpStatus.OK);
        } catch (Exception ex) {
            Logger logger = LoggerFactory.getLogger(SiteController.class);
            logger.error(ex.getMessage());
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    
    
    
}
