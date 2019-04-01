package com.retail.store.models;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class ProductCompositeKey implements Serializable {
    protected Integer productId;
    protected Integer supplierId;

    public ProductCompositeKey() {

    }

    public ProductCompositeKey(Integer productId, Integer supplierId) {
        this.productId = productId;
        this.supplierId = supplierId;
    }
}
