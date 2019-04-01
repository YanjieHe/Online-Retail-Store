package com.retail.store.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@IdClass(ProductCompositeKey.class)
public class Product {
    @Id
    @Column(name = "Product_ID")
    private Integer productId;

    @Id
    @Column(name = "Supplier_ID")
    private Integer supplierId;

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

    public Product(Integer productId,Integer supplierId, String name, Double price, Date date, String imageLink, String description) {
        this.productId = productId;
        this.supplierId = supplierId;
        this.name = name;
        this.price = price;
        this.date = date;
        this.imageLink = imageLink;
        this.description = description;
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

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public Integer getSupplierId() {
        return supplierId;
    }

    public void setSupplierId(Integer supplierId) {
        this.supplierId = supplierId;
    }
}