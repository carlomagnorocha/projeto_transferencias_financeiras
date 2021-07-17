package com.cvc.api.financial_transfers.response;

import java.util.ArrayList;
import java.util.List;

import com.cvc.api.financial_transfers.dtos.Scheduling;

public class Data   {
	private List<Scheduling> schedulingList = new ArrayList<Scheduling>();
	
	
	public Data(List<Scheduling> schedulingList) {
		this.schedulingList = schedulingList;
	}

	
	public List<Scheduling> getSchedulingList() {
		return schedulingList;
	}

	public void setSchedulingList(List<Scheduling> schedulingList) {
		this.schedulingList = schedulingList;
	}
	
}
