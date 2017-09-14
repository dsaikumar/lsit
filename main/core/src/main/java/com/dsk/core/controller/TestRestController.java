package com.dsk.core.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dsk.core.beans.UserBean;
import com.dsk.core.info.UserBeanInfo;
import com.dsk.core.repositories.UserBeanRepository;
import com.dsk.core.vo.GenericResponse;

@Controller
@RequestMapping(value="/test")
public class TestRestController {
	
	@Autowired
	UserBeanRepository userBeanRepository;
	
	@RequestMapping(value ="/proxy", method=RequestMethod.GET)
	public @ResponseBody GenericResponse<Object> getResponse(@RequestParam(value="text",required=true) String text){
		GenericResponse<Object> response = null;
		try{
			UserBean userBean = new UserBean(text);
			userBean = userBeanRepository.save(userBean);
			UserBeanInfo userBeanInfo = new UserBeanInfo();
			userBeanInfo.setId(userBean.getId());
			userBeanInfo.setUserName(userBean.getUserName());
			response=GenericResponse.prepareSuccessResponse(userBean);
		}catch(Exception e){
			response=GenericResponse.prepareFailedResponse("testErrorMessage", "testErrorCode");
		}
		return response;
	}
}
