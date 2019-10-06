package com.csse.procurementws.controller;
import com.csse.procurementws.repository.*;
import com.csse.procurementws.serviceImpl.ReturnItemReport;
import com.csse.procurementws.serviceImpl.ReturnedGoodsService;
import com.csse.procurementws.model.ReturnedGoods;
import com.csse.procurementws.model.Supplier;
import com.csse.procurementws.controller.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@CrossOrigin
@RestController
@RequestMapping(value = "/ReturnItemController")
public class ReturnedGoodsController {

    @Autowired
    private ReturnedGoodsService returnedGoodsService;

    @PostMapping(value = "/addReturnedItem")
    public ReturnedGoods addItem(@RequestBody ReturnedGoods returnedGoods){
        return  returnedGoodsService.addItem(returnedGoods);
    }

   
    @GetMapping(value = "/getAllReturnItem")
    public List<ReturnedGoods> getAllReturnItems(){
    	
        return  returnedGoodsService.getAllReturnItem();

    }
    @PostMapping(value = "/updateReturnItem")
    public ReturnedGoods UpdateReturnItem(@RequestBody ReturnedGoods returnedGoods){
        return returnedGoodsService.UpdateReturnItem(returnedGoods);
    }

    @DeleteMapping("/deleteReturnEntry/{retItemId}")
    void deleteEmployee(@PathVariable int retItemId) {
    	returnedGoodsService.deleteReturnEntry(retItemId);
    }
    
    
    
    //////////////////////////////////////REPORTS////////////////
    @RequestMapping(value = "/printReturnGoodsReport", method = RequestMethod.POST)
    public ResponseEntity<List<ReturnedGoods>> printReport() {
        try {
            List<ReturnedGoods> returnList = returnedGoodsService.getAllReturnItem();
            ArrayList<ReturnedGoods> printAllReport = new ArrayList<>(returnList);
            ReturnItemReport l1 = new ReturnItemReport();
            l1.generateLowStockLevelPdf(printAllReport);
            return new ResponseEntity<>(returnList, HttpStatus.OK);
            
        } catch (Exception ex) {
            Logger logger = LoggerFactory.getLogger(SupplierController.class);
            logger.error(ex.getMessage());
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
}