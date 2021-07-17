package com.cvc.api.financial_transfers.dtos;

import java.time.LocalDate;

import com.cvc.api.financial_transfers.entities.Tax;

public class Scheduling {
	private Integer originAccount;
	private Integer destinationAccount;
	private Double value;
	private Tax tax;
	private LocalDate transferDate;
	private LocalDate schedulingDate;
	
	
	public Scheduling(){}


	public Integer getOriginAccount() {
		return originAccount;
	}

	public void setOriginAccount(Integer originAccount) {
		this.originAccount = originAccount;
	}

	public Integer getDestinationAccount() {
		return destinationAccount;
	}

	public void setDestinationAccount(Integer destinationAccount) {
		this.destinationAccount = destinationAccount;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}

	public Tax getTax() {
		return tax;
	}

	public void setTax(Tax tax) {
		this.tax = tax;
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
