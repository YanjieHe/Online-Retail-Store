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

    @Column(name = "Image_Link")
    private String imageLink;

    @Column(name = "Description")
    private String description;

    public Product() {

    }

    public Product(Integer ID, String name, Double price, Date date, String imageLink, String description) {
        this.ID = ID;
        this.name = name;
        this.price = price;
        this.date = date;
        this.imageLink = imageLink;
        this.description = description;
    }

    public Integer getID() {
        return ID;
    }

    public void setID(Integer ID) {
        this.ID = ID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getImageLink() {
        return imageLink;
    }

    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}