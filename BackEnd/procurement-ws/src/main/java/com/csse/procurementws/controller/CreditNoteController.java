package com.csse.procurementws.controller;

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

import com.csse.procurementws.model.CommonResponse;
import com.csse.procurementws.model.CreditNote;
import com.csse.procurementws.repository.CreditNoteRepository;
import com.csse.procurementws.serviceImpl.CreditNoteServiceImpl;

@RestController
@CrossOrigin
public class CreditNoteController {
	
	
	@Autowired
	CreditNoteServiceImpl creditNoteserviceIml;
	
	@Autowired
	CreditNoteRepository creditnoterepository;
	
    @RequestMapping(value = "/save/creditNote", method = RequestMethod.POST)
    public ResponseEntity<CommonResponse> saveItem(@Valid @RequestBody CreditNote creditNote) {
        try {    
        	creditNoteserviceIml.saveItem(creditNote);
            return new ResponseEntity<>(new CommonResponse("SUCSESS", "Item successfully Added"), HttpStatus.OK);      
        } catch (Exception ex) {
            
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
            
        }
    } 
    
    @GetMapping("/creditNoteItems")
    public List<CreditNote> getAllNotes() {
        return creditnoterepository.findAll();
    }  

}
