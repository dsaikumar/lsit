package com.dsk.core.vo;

import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
@JsonSerialize(include = JsonSerialize.Inclusion.NON_NULL)
@JsonPropertyOrder({ "status", "result" })
public class GenericResponse<T> {

	private int status;
	private Map<Object, Object> result;
	public GenericResponse() {
		super();
	}
	public int getStatus() {
		return status;
	}
	public Map<Object, Object> getResult() {
		return result;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public void setResult(Map<Object, Object> result) {
		this.result = result;
	}
	public static GenericResponse<Object> prepareSuccessResponse(Object result){
		GenericResponse<Object> response = new GenericResponse<Object>();
		response.setStatus(200);
		Map<Object, Object> responseMap = new HashMap<Object, Object>();
		responseMap.put("data", result);
		response.setResult(responseMap);
		return response;
	}
	public static GenericResponse<Object> prepareFailedResponse(String errorMessage,String errorCode){
		GenericResponse<Object> response = new GenericResponse<Object>();
		Map<Object, Object> responseMap = new HashMap<Object, Object>();
		response.setStatus(500);
		responseMap.put("errorCode", errorCode);
		responseMap.put("errorMessage", errorMessage);
		response.setResult(responseMap);
		return response;
	}
}
