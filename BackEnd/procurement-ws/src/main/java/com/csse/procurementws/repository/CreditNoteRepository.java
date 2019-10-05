package com.csse.procurementws.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.csse.procurementws.model.CreditNote;

public interface CreditNoteRepository extends JpaRepository<CreditNote, Integer>{
	
}
