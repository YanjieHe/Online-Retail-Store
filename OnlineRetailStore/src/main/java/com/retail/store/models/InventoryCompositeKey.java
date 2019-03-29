package com.retail.store.models;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class InventoryCompositeKey implements Serializable {
    protected Integer supplierId;

    protected Integer productId;

    public InventoryCompositeKey() {
    }

    public InventoryCompositeKey(Integer supplierId, Integer productId) {
        this.supplierId = supplierId;
        this.productId = productId;
    }
}
