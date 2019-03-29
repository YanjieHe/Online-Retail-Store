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
    private Integer CustomerId;
    @Column(name = "Supplier_ID")
    private Integer SupplierId;
    @Column(name = "Product_ID")
    private Integer productId;
    @Column(name = "Quantities")
    private Integer quantities;
    @Column(name = "Order_Date")
    private Date date;
    @Column(name = "Order_Status")
    private String status;
}
