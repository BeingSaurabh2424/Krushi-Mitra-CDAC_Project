package com.sunbeam.entities;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="products")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString(exclude = "image")
//product table
public class Product extends BaseEntity{
	
	@Column(length = 100)
	private String name;
	
	@Column(columnDefinition = "TEXT")
	private String description;
	
	@Column(precision = 10,scale = 2)
	private BigDecimal price_per_kg;
	
	@Column(precision = 10,scale = 2)
	private BigDecimal stock_qty;
	
	private byte[] image;
	
	


}
