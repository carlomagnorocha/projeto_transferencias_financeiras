package com.cvc.api.financial_transfers.response;


public class Response   {
	private Data data = null;
	private Integer code = null;
	private String message = null;

  
  	public Response() {}


	public Data getData() {
		return data;
	}
	
	public void setData(Data data) {
		this.data = data;
	}
	
	public Integer getCode() {
		return code;
	}
	
	public void setCode(Integer code) {
		this.code = code;
	}
	
	public String getMessage() {
		return message;
	}
	
	public void setMessage(String message) {
		this.message = message;
	}
 
}
