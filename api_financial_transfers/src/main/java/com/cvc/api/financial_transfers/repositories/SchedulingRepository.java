package com.cvc.api.financial_transfers.repositories;

import java.util.List;

import com.cvc.api.financial_transfers.dtos.Scheduling;
import com.cvc.api.financial_transfers.enums.RespostaCodigo;
import com.cvc.api.financial_transfers.response.Data;
import com.cvc.api.financial_transfers.response.Response;


public class SchedulingRepository {

	public Response getSchedulings(List<Scheduling> schedulingList) throws Exception {
		Response response = new Response();
		
		
		
		response.setData(new Data(schedulingList));
		response.setCode(RespostaCodigo.CODE_SUCCESS.getValue());
		response.setMessage("Operation Performed Successfully");
		
		return response;
	}
	
	public Response createScheduling(List<Scheduling> schedulingList, Scheduling scheduling) throws Exception {
		Response response = new Response();
		
		schedulingList.add(scheduling);
		
		
		response.setCode(RespostaCodigo.CODE_SUCCESS.getValue());
		response.setMessage("Operation Performed Successfully");
		
		return response;
	}
	
	public Response clearSchedulings(List<Scheduling> schedulingList) throws Exception {
		Response response = new Response();
		
		schedulingList.clear();
		
		
		response.setCode(RespostaCodigo.CODE_SUCCESS.getValue());
		response.setMessage("Operation Performed Successfully");
		
		return response;
	}
	
	
	
}