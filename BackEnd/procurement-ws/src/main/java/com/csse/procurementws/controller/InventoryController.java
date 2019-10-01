/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csse.procurementws.controller;
import java.io.InputStream;

import java.io.OutputStream;

import com.csse.procurementws.model.CommonResponse;

import com.csse.procurementws.serviceImpl.InventoryServiceImpl;
import net.sf.jasperreports.engine.JRDataSource;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import net.sf.jasperreports.engine.util.JRLoader;
import org.springframework.core.io.Resource;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.orm.jpa.persistenceunit.PersistenceUnitManager;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.csse.procurementws.model.Inventory;
import com.csse.procurementws.repository.InventoryRepository;
import org.springframework.context.ApplicationContext;
import org.springframework.http.MediaType;


/**
 *
 * @author Pasan Kamburugamuwa
 */
@RestController
@CrossOrigin
public class InventoryController {
    
    @Autowired
    InventoryServiceImpl inventoryserviceImpl;
    
    @Autowired
    private JdbcTemplate jdbcTemplate;
    
    
    @Autowired
    ApplicationContext context;
    
    @Autowired
    private DataSource dataSource;
    
    @Autowired
    InventoryRepository inventoryrepository;
    
    @RequestMapping(value = "/save/inventoryitem", method = RequestMethod.POST)
    public ResponseEntity<CommonResponse> saveItem(@Valid @RequestBody Inventory inventoryitem) {
        try {    
            inventoryserviceImpl.saveItem(inventoryitem);
            return new ResponseEntity<>(new CommonResponse("SUCSESS", "Item successfully Added"), HttpStatus.OK);      
        } catch (Exception ex) {
            
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
            
        }
    } 
    
    @GetMapping("/inventoryItems")
    public List<Inventory> getAllNotes() {
        return inventoryrepository.findAll();
    }  
    
//    @GetMapping(path = "/pdf")
//    @ResponseBody
////    public void getPdf(@PathVariable String jrxml, HttpServletResponse response) throws Exception {
//    public void getPdf(HttpServletResponse response) throws Exception {
//        //Get JRXML template from resources folder
////        Resource resource = context.getResource("classpath:reports/" + jrxml + ".jrxml");
//        Resource resource = context.getResource("classpath:res/SupplierInventory.jasper");
//        //Compile to jasperReport
//        InputStream inputStream = resource.getInputStream();
//        JasperReport report = JasperCompileManager.compileReport(inputStream);
//        //Parameters Set
//        Map<String, Object> params = new HashMap<>();
//
//        List<Inventory> inventory = (List<Inventory>) inventoryrepository.findAll();
//
//        //Data source Set
//        JRDataSource dataSource = new JRBeanCollectionDataSource(inventory);
//        params.put("datasource", dataSource);
//
//        //Make jasperPrint
//        JasperPrint jasperPrint = JasperFillManager.fillReport(report, params, dataSource);
//        //Media Type
//        response.setContentType(MediaType.APPLICATION_PDF_VALUE);
//        //Export PDF Stream
//        JasperExportManager.exportReportToPdfStream(jasperPrint, response.getOutputStream());
//    }
}

    
    
    
    