package com.csse.procurementws.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "creditnote")
public class CreditNote {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "ID")
    private Integer creditNoteId;
    
    @Column(name ="RETURNGOODID")
    private String returnGoodID;
    
    @Column(name = "CREDITNOTE")
    private String creditnote;
    
    public CreditNote() {
    	
    	
    }
    

	public CreditNote(Integer creditNoteId, String returnGoodID, String creditnote) {
		super();
		this.creditNoteId = creditNoteId;
		this.returnGoodID = returnGoodID;
		this.creditnote = creditnote;
	}


	public Integer getCreditNoteId() {
		return creditNoteId;
	}

	public void setCreditNoteId(Integer creditNoteId) {
		this.creditNoteId = creditNoteId;
	}

	public String getCreditnote() {
		return creditnote;
	}

	public void setCreditnote(String creditnote) {
		this.creditnote = creditnote;
	}

	public String getReturnGoodID() {
		return returnGoodID;
	}

	public void setReturnGoodID(String returnGoodID) {
		this.returnGoodID = returnGoodID;
	}

}
