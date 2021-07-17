package com.cvc.api.financial_transfers.services;

import java.util.List;

import com.cvc.api.financial_transfers.dtos.Scheduling;
import com.cvc.api.financial_transfers.repositories.SchedulingRepository;
import com.cvc.api.financial_transfers.response.Response;

public class SchedulingService {
private SchedulingRepository schedulingRepository;
	
	
	public SchedulingService(){}
	
	
	public Response getSchedulings(List<Scheduling> schedulingList) throws Exception {
		Response response = new Response();
		
		schedulingRepository = new SchedulingRepository();
		response = schedulingRepository.getSchedulings(schedulingList);
		
		return response;
	}
	
	public Response createScheduling(List<Scheduling> schedulingList, Scheduling scheduling) throws Exception {
		Response response = new Response();
		
		schedulingRepository = new SchedulingRepository();
		response = schedulingRepository.createScheduling(schedulingList, scheduling);
		
		return response;
	}
	
	public Response clearSchedulings(List<Scheduling> schedulingList) throws Exception {
		Response response = new Response();
		
		schedulingRepository = new SchedulingRepository();
		response = schedulingRepository.clearSchedulings(schedulingList);
		
		return response;
	}
	
	
}
