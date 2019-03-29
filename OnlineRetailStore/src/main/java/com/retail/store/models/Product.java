package com.retail.store.models;


import javax.persistence.*;
import java.util.Date;

@Entity
public class Product {
    @Id
    @Column(name = "Product_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer ID;

    @Column(name = "Name")
    private String name;

    @Column(name = "Price")
    private Double price;

    @Column(name = "Post_Date")
    private Date date;

    @Column(name = "Description")
    private String description;

}