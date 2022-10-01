package com.cvs.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cvs.exception.ResourceNotFoundException;
import com.cvs.pojos.Child;
import com.cvs.pojos.Hospital;
import com.cvs.service.IChildService;


@CrossOrigin( origins="http://localhost:3000")
@Controller
@ResponseBody

//instead of above both annotation one combine @RestController annotation is also used
@RequestMapping("/child")
public class ChildController {
	//we use constructor based dependency injection of Service
	
		private IChildService childService;
	public ChildController(IChildService childService) {
		super();
		this.childService = childService;
	}

		//to process request for storing child in persistance database
		//localhost:8080/cvs/child/add
		@PostMapping("/add")
		public ResponseEntity<Child> saveChild(@RequestBody Child child){
			return new ResponseEntity<Child>(childService.save(child), HttpStatus.CREATED);
		}


		//to fetch all children details from database
		//localhost:8080/cvs/child/getall
		@GetMapping("/getall")
		public List<Child> getAll(){
			return childService.findAll();
		}
		
		
		//to fetch child details from database by id
		//localhost:8080/cvs/child/get/{id}

		@GetMapping("/get/{id}")
		public Child findChildById(@PathVariable("id") Long id){
			
			return childService.findById(id);
					
		}
		
		
		@DeleteMapping("/delete/{id}")
		public void deleteByRegId(@PathVariable("id") Long id){
			try {
				childService.removeChildById(id);
			}catch(Exception e) {
				System.out.println("Resource not found");
			}
						
			//childService.removeChildById(id);
		}
		
		
		@PutMapping("/update/{id}")
		public Child updateChild(@RequestBody Child newChild,@PathVariable Long id) {
			Child child=childService.findById(id);
			if(child !=null) {
				return childService.save(newChild);
			}
			return null;
				
		}
//		@PostMapping("/login")
//		public ResponseEntity<Child> processLoginForm(@RequestParam(value="name")  String name, 
//				@RequestParam(value="fName") String fName,@RequestParam(value="mName") String mName )
//			{
//				System.out.println("in process login form " + name + " " + fName + " "+mName );
//		
//			return new ResponseEntity<Child>(childService.findByNameFnameMname(name,fName,mName), HttpStatus.FOUND);
//			}
		@GetMapping("/login")
		public Child processLoginForm(@RequestParam(value="name")  String name, 
				@RequestParam(value="fName") String fName,@RequestParam(value="mName") String mName )
			{
				System.out.println("in process login form " + name + " " + fName + " "+mName );
				return childService.findByNameFnameMname(name, fName, mName);
			}
		
}
