package com.csse.procurementws.controller;

import com.csse.procurementws.model.CommonResponse;

import com.csse.procurementws.model.Order;
import com.csse.procurementws.serviceImpl.OrderServiceImpl;
import java.util.List;
import javax.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;
import java.util.List;
import com.csse.procurementws.serviceImpl.InvoiceReport;

/**
 *
 * @author (IT17119122 ** Liyanage I.M)
 */
@RestController
@CrossOrigin
public class OrderController {
    
    @Autowired
    OrderServiceImpl orderServiceImpl;
    
    @RequestMapping(value = "/getorders", method = RequestMethod.GET)
    public ResponseEntity<List<Order>> getOrders() {
        try {
            List<Order> orderList = orderServiceImpl.getAllOrders();
            return new ResponseEntity<>(orderList, HttpStatus.OK);
        } catch (Exception ex) {
            Logger logger = LoggerFactory.getLogger(OrderController.class);
            logger.error(ex.getMessage());
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @RequestMapping(value = "/update/status/{status}/{id}", method = RequestMethod.POST)
    public ResponseEntity<CommonResponse> updateStatus(@PathVariable(value = "status") String status, @PathVariable(value = "id") Integer id) {
        try {
            orderServiceImpl.setStatusOrder(id,status);
            return new ResponseEntity<>(new CommonResponse("SUCSESS", "Item successfully Updated"), HttpStatus.OK);
        } catch (Exception ex) {
            Logger logger = LoggerFactory.getLogger(OrderController.class);
            logger.error(ex.getMessage());
            return new ResponseEntity<>(new CommonResponse("ERROR", "Failed to update item"), HttpStatus.OK);
        }
    }
    
    @RequestMapping(value = "/getorder/{id}", method = RequestMethod.GET)
    public ResponseEntity<Order> orderGetById(@PathVariable(value = "id") Integer id) {
        try {
            Order order = orderServiceImpl.getOrderById(id);
            return new ResponseEntity<>(order, HttpStatus.OK);
        } catch (Exception ex) {
            Logger logger = LoggerFactory.getLogger(OrderController.class);
            logger.error(ex.getMessage());
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @RequestMapping(value = "/save/order", method = RequestMethod.POST)
    public String saveOrder(@Valid @RequestBody Order order) {
        try {
            orderServiceImpl.saveOrder(order);
            return "SUCSESS";
        } catch (Exception ex) {
            Logger logger = LoggerFactory.getLogger(OrderController.class);
            logger.error(ex.getMessage());
            return "INTERNAL_SERVER_ERROR";
        }
    }
    
    
    
    //generate report
    @RequestMapping(value = "/printOrderReport", method = RequestMethod.POST)   
    public ResponseEntity<List<Order>> getOrdersforPrintInvoice() {
        try {
            List<Order> orderList = orderServiceImpl.getAllOrders();
            ArrayList<Order> printAllReport = new ArrayList<>(orderList);
            InvoiceReport l1 = new InvoiceReport();
            l1.generateLowStockLevelPdf(printAllReport);
            return new ResponseEntity<>(orderList, HttpStatus.OK);
        } catch (Exception ex) {
            Logger logger = LoggerFactory.getLogger(OrderController.class);
            logger.error(ex.getMessage());
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
