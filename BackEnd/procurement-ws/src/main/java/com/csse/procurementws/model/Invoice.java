package com.csse.procurementws.model;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Invoice {
	
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "ID")
    private int invoiceID;
    
    @Column(name ="INVOICENAME")
    private String invoiceName;
    
    @Column(name = "ORDERPREFEENCE")
    private String orderPreference;

	public int getInvoiceID() {
		return invoiceID;
	}
	
	public void setInvoiceID(int invoiceID) {
		this.invoiceID = invoiceID;
	}
	
	public String getInvoiceName() {
		return invoiceName;
	}

	public void setInvoiceName(String invoiceName) {
		this.invoiceName = invoiceName;
	}

	public String getOrderPreference() {
		return orderPreference;
	}

	public void setOrderPreference(String orderPreference) {
		this.orderPreference = orderPreference;
	}
    
    
    

}
