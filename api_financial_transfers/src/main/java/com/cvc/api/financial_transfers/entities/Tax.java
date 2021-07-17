package com.cvc.api.financial_transfers.entities;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

import com.cvc.api.financial_transfers.enums.IndexesTax;

public class Tax {
	private Character type;
	private Double taxValue;
	private Double transferValue;
	private LocalDate transferDate;
	private LocalDate schedulingDate;
	
	
	public Tax(Double transferValue, LocalDate transferDate, LocalDate schedulingDate) {
		this.transferValue = transferValue;
		this.transferDate = transferDate;
		this.schedulingDate = schedulingDate;
	}
	
	
	private Double calculateA() {
		return (double)IndexesTax.A_TYPE_INDEX1.getValue() + (this.transferValue * ((double)IndexesTax.A_TYPE_INDEX2.getValue()/(double)100));
	}
	
	private Double calculateB() {
		return (double)IndexesTax.B_TYPE_INDEX1.getValue() * (ChronoUnit.DAYS.between(this.schedulingDate, this.transferDate));
	}
	
	private Double calculateC() {
		if(this.transferDate.isAfter(this.schedulingDate.plusDays(10)) && this.transferDate.isBefore(this.schedulingDate.plusDays(21)))
			return this.transferValue * ((double)IndexesTax.C_TYPE_INDEX1.getValue()/(double)100);
		else if(this.transferDate.isAfter(this.schedulingDate.plusDays(20)) && this.transferDate.isBefore(this.schedulingDate.plusDays(31))) 
			return this.transferValue * ((double)IndexesTax.C_TYPE_INDEX2.getValue()/(double)100);
		else if(this.transferDate.isAfter(this.schedulingDate.plusDays(30)) && this.transferDate.isBefore(this.schedulingDate.plusDays(41))) 
			return this.transferValue * ((double)IndexesTax.C_TYPE_INDEX3.getValue()/(double)100);
		else if(this.transferDate.isAfter(this.schedulingDate.plusDays(40)) && this.transferValue > (double)IndexesTax.C_TYPE_INDEX5.getValue()) 
			return this.transferValue * ((double)IndexesTax.C_TYPE_INDEX4.getValue()/(double)100);
		
		return null; // there is no tax to apply
	}
	
	public void calculate() {
		if(this.transferDate != null && this.schedulingDate != null) {
			if(this.transferDate.isEqual(this.schedulingDate)) { // A type
				this.type = 'A';
				this.taxValue = calculateA();
			}
			else {
				if(this.transferDate.isBefore(this.schedulingDate.plusDays(11))) { //B type
					this.type = 'B';
					this.taxValue = calculateB();
				}
				else {
					if(this.transferDate.isAfter(this.schedulingDate.plusDays(10))) { // C type
						this.type = 'C';
						this.taxValue = calculateC();
					}
					else { // there is no tax to apply
						this.taxValue = null; 
					}
				}
			}
		}
		else {
			this.taxValue = 0.0; // transferDate or schedulingDate null
		}
	}

	public Character getType() {
		return type;
	}

	public void setType(Character type) {
		this.type = type;
	}
	
	public Double getTaxValue() {
		return taxValue;
	}

	public void setTaxValue(Double taxValue) {
		this.taxValue = taxValue;
	}

	public Double getTransferValue() {
		return transferValue;
	}

	public void setTransferValue(Double transferValue) {
		this.transferValue = transferValue;
	}

	public LocalDate getTransferDate() {
		return transferDate;
	}

	public void setTransferDate(LocalDate transferDate) {
		this.transferDate = transferDate;
	}

	public LocalDate getSchedulingDate() {
		return schedulingDate;
	}

	public void setSchedulingDate(LocalDate schedulingDate) {
		this.schedulingDate = schedulingDate;
	}
	
}
