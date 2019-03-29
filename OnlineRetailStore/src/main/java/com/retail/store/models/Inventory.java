package com.retail.store.models;

import javax.persistence.*;

@Entity
@IdClass(InventoryCompositeKey.class)
public class Inventory {
    @Id
    @Column(name = "Supplier_ID")
    private Integer supplierId;

    @Id
    @Column(name = "Product_ID")
    private Integer productId;

    @Column(name = "Quantities")
    private Integer quantities;
}
