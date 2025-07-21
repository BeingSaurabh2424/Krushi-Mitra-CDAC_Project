package com.sunbeam.entities;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity
@Table(name="users")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString(exclude = {"email","password"})
//users table
public class Users extends BaseEntity{

	
	@Column(length = 100,nullable = false)
	private String name;
	
	@Column(length = 100,nullable = false,unique = true)
	private String email;
	
	@Column(length = 150,nullable = false)
	private String password;
	@Column(length = 15)
	private String phone;
	
	private Role role;
	
	@Column(length = 150)
	private String address;
	

	
	

}
