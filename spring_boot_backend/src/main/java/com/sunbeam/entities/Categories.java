package com.sunbeam.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "categories")
@Getter
@Setter
//Creating Categories table to normalize product categories 
@ToString(callSuper = true)
//categories table
public class Categories extends BaseEntity{
	
	@Column(unique = true, length = 50)
	private String name;
	@Column(columnDefinition = "TEXT")
	private String description;
	
}
