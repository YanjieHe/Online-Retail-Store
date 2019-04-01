package com.retail.store.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import java.util.Date;

@Entity
@IdClass(ShoppingCartCompositeKey.class)
public class ShoppingCart {
    @Id
    @Column(name = "Customer_ID")
    private Integer customerId;

    @Id
    @Column(name = "Supplier_ID")
    private Integer supplierId;

    @Id
    @Column(name = "Product_ID")
    private Integer productId;

    @Column(name = "Adding_Date")
    private Date date;

    public ShoppingCart() {

    }

    public ShoppingCart(Integer customerId, Integer supplierId, Integer productId, Date date) {
        this.customerId = customerId;
        this.supplierId = supplierId;
        this.productId = productId;
        this.date = date;
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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
