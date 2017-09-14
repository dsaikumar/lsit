package com.dsk.core.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dsk.core.beans.UserBean;
import com.dsk.core.vo.GenericResponse;

@Controller
@RequestMapping(value="/test")
public class TestRestController {
	
	@RequestMapping(value ="/proxy", method=RequestMethod.GET)
	public @ResponseBody GenericResponse<Object> getResponse(@RequestParam(value="text",required=true) String text){
		GenericResponse<Object> response = null;
		try{
			response=GenericResponse.prepareSuccessResponse(new UserBean(text));
		}catch(Exception e){
			response=GenericResponse.prepareFailedResponse("testErrorMessage", "testErrorCode");
		}
		return response;
	}
}
