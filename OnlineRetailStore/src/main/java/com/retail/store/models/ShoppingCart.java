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

}
