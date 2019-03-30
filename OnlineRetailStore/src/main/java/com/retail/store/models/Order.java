package com.retail.store.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Customer_Order")
public class Order {
    @Id
    @Column(name = "Order_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer orderId;

    @Column(name = "Customer_ID")
    private Integer customerId;

    @Column(name = "Supplier_ID")
    private Integer supplierId;

    @Column(name = "Product_ID")
    private Integer productId;

    @Column(name = "Price")
    private Double price;

    @Column(name = "Quantities")
    private Integer quantities;

    @Column(name = "Order_Date")
    private Date date;

    @Column(name = "Order_Status")
    private String status;

    public Order() {

    }

    public Order(Integer orderId, Integer customerId, Integer supplierId, Integer productId, Double price, Integer quantities, Date date, String status) {
        this.orderId = orderId;
        this.customerId = customerId;
        this.supplierId = supplierId;
        this.productId = productId;
        this.price = price;
        this.quantities = quantities;
        this.date = date;
        this.status = status;
    }

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public Integer getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }

    public Integer getSupplierId() {
        return supplierId;
    }

    public void setSupplierId(Integer supplierId) {
        this.supplierId = supplierId;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public Integer getQuantities() {
        return quantities;
    }

    public void setQuantities(Integer quantities) {
        this.quantities = quantities;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}

