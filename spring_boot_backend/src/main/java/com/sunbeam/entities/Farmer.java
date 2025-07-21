package com.sunbeam.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="farmers")
@NoArgsConstructor
@Setter
@Getter
//farmers table
public class Farmer extends BaseEntity{

	
	@Lob
	@Column(columnDefinition = "TEXT")
	private String farmAddress;
	
	@Lob
	@Column(columnDefinition = "TEXT")
	private String bio;
	

}
