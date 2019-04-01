package com.retail.store.models;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class ShoppingCartCompositeKey implements Serializable {

    protected Integer customerId;

    protected Integer supplierId;

    protected Integer productId;

    public ShoppingCartCompositeKey() {

    }

    public ShoppingCartCompositeKey(Integer customerId, Integer supplierId, Integer productId) {
        this.customerId = customerId;
        this.supplierId = supplierId;
        this.productId = productId;
    }
}
