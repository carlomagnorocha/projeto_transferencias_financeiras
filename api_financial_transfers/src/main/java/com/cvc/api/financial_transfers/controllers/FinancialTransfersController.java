package com.cvc.api.financial_transfers.controllers;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cvc.api.financial_transfers.dtos.Scheduling;
import com.cvc.api.financial_transfers.enums.RespostaCodigo;
import com.cvc.api.financial_transfers.response.Response;
import com.cvc.api.financial_transfers.services.SchedulingService;


@CrossOrigin
@RestController
public class FinancialTransfersController {
	
	List<Scheduling> schedulingList = new ArrayList<Scheduling>();

	@GetMapping("/scheduling")
	public Response getSchedulings() {
		Response response = new Response();
        try {
        	SchedulingService schedulingService = new SchedulingService();
        	response = schedulingService.getSchedulings(this.schedulingList);

        	return response;
        } catch (Exception e) {
        	StringWriter sw = new StringWriter();
			PrintWriter pw = new PrintWriter(sw);
			e.printStackTrace(pw);
			
			String msgError = "";
			response.setCode(RespostaCodigo.CODE_ERROR.getValue());
			
			if(e.getMessage() != null) {
				msgError = e.getMessage();
				response.setMessage(e.getMessage().split(":")[0]);
			}
			if(e.getCause() != null) {
				msgError = msgError + e.getCause();
			}

			e.printStackTrace();
		
			return response;
        }
	    
	}
	
	@PostMapping("/scheduling")
	public Response createScheduling(@RequestBody Scheduling scheduling) {   
    	Response response = new Response();
        try {
        	SchedulingService schedulingService = new SchedulingService();
        	response = schedulingService.createScheduling(this.schedulingList, scheduling);

        	return response;
        } catch (Exception e) {
        	StringWriter sw = new StringWriter();
			PrintWriter pw = new PrintWriter(sw);
			e.printStackTrace(pw);
			
			String msgError = "";
			response.setCode(RespostaCodigo.CODE_ERROR.getValue());
			
			if(e.getMessage() != null) {
				msgError = e.getMessage();
				response.setMessage(e.getMessage().split(":")[0]);
			}
			if(e.getCause() != null) {
				msgError = msgError + e.getCause();
			}

			e.printStackTrace();
		
			return response;
        }
	}
	
	@DeleteMapping("/scheduling")
	public Response cleanSchedulings() {   
    	Response response = new Response();
        try {
        	SchedulingService schedulingService = new SchedulingService();
        	response = schedulingService.clearSchedulings(this.schedulingList);

        	return response;
        } catch (Exception e) {
        	StringWriter sw = new StringWriter();
			PrintWriter pw = new PrintWriter(sw);
			e.printStackTrace(pw);
			
			String msgError = "";
			response.setCode(RespostaCodigo.CODE_ERROR.getValue());
			
			if(e.getMessage() != null) {
				msgError = e.getMessage();
				response.setMessage(e.getMessage().split(":")[0]);
			}
			if(e.getCause() != null) {
				msgError = msgError + e.getCause();
			}

			e.printStackTrace();
		
			return response;
        }
	}
	
}
