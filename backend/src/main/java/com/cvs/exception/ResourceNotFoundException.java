package com.cvs.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND)

public class ResourceNotFoundException extends RuntimeException{
	
	private static final Long SERIALVERSIONID_LONG =1L;
	private String resource;
	private  String fieldName;
	private Object fieldValue;
	public ResourceNotFoundException(String resource, String fieldName, Object fieldValue) {
		super(String.format("%s not found with %s : %s",resource,fieldName,fieldValue ));
		this.resource = resource;
		this.fieldName = fieldName;
		this.fieldValue = fieldValue;
	}
	public String getResource() {
		return resource;
	}
	public void setResource(String resource) {
		this.resource = resource;
	}
	public String getFieldName() {
		return fieldName;
	}
	public void setFieldName(String fieldName) {
		this.fieldName = fieldName;
	}
	public Object getFieldValue() {
		return fieldValue;
	}
	public void setFieldValue(Object fieldValue) {
		this.fieldValue = fieldValue;
	}
	@Override
	public String toString() {
		return "ResourceNotFoundException [resource=" + resource + ", fieldName=" + fieldName + ", fieldValue="
				+ fieldValue + "]";
	}
	
	
	
	
}
