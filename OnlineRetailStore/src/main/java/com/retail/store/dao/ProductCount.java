package com.retail.store.dao;

import com.retail.store.models.Product;

public class ProductCount {
    private int productId;
    private int count;

    public ProductCount() {

    }

    public ProductCount(int productId, int count) {
        this.productId = productId;
        this.count = count;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }
}
