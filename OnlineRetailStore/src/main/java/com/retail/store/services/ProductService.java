package com.retail.store.services;

import com.retail.store.dao.ProductDao;
import com.retail.store.models.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ProductService {
    @Autowired
    private ProductDao productDao;

    public Product fetchProductById(int productId) {
        return productDao.read(productId);
    }

    public void createProduct(Product product) {
        productDao.createProduct(product);
    }

    public ArrayList<Product> fetchTrendingProducts(int amount) {
        return productDao.fetchTrendingProducts(amount);
    }
}
