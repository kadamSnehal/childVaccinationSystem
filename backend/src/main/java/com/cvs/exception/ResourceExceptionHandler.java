package com.cvs.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;


public class ResourceExceptionHandler extends ResponseEntityExceptionHandler {

	@ExceptionHandler(ResourceNotFoundException.class)
	public final ResponseEntity<Object> handleAllExceptions(ResourceNotFoundException ex){
		
		return new ResponseEntity<Object>("", HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
}
