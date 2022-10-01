package com.cvs.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.web.bind.annotation.CrossOrigin;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name="children")    //Equivalent to @Getter @Setter @RequiredArgsConstructor @ToString @EqualsAndHashCode. 
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Child extends BaseEntity {

	//name,lName,fName,mName,address,dob,gender,emial
	@Column(length=30,name="first_name")
	private String name;
	@Column(length=30,name="father_name")
	private String fName;
	
	@Column(length=30,name="mother_name")
	private String mName;
	
	@Column(length=30,name="last_name")
	private String lName;
	private String address;
	

	@Column(length=20)
	private String dob;
	
	
	@Column(length=20)
	@Enumerated(EnumType.STRING)
	private Gender gender;
	@Column(length=30)
	private String email;
		
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getfName() {
		return fName;
	}
	public void setfName(String fName) {
		this.fName = fName;
	}
	public String getmName() {
		return mName;
	}
	public void setmName(String mName) {
		this.mName = mName;
	}
	public String getlName() {
		return lName;
	}
	public void setlName(String lName) {
		this.lName = lName;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public Gender getGender() {
		return gender;
	}
	public void setGender(Gender gender) {
		this.gender = gender;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	

	
	
	

}
