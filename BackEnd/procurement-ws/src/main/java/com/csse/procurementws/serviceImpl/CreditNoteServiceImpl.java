package com.csse.procurementws.serviceImpl;

import java.util.ArrayList;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csse.procurementws.model.CreditNote;
import com.csse.procurementws.model.ReturnedGoods;
import com.csse.procurementws.repository.CreditNoteRepository;


@Service
public class CreditNoteServiceImpl {
	
	@Autowired
	CreditNoteRepository creditNoteRepository;
	
	
    public void saveItem(CreditNote creditNote) {
    	creditNoteRepository.save(creditNote);
     }
    
    public List<CreditNote> getAllCreditItem() {
        System.out.println("weda");
        return creditNoteRepository.findAll();
    }


    public CreditNote UpdateCreditNote(CreditNote creditnote) {
        System.out.println("updateweda");
        return creditNoteRepository.save(creditnote);
    }

    public void deleteCreditNoteEntry(String creditNoteID) {

    	creditNoteRepository.deleteById(Integer.parseInt(creditNoteID));
    }
    
  

}
