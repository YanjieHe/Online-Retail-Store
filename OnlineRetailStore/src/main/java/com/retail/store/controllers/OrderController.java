package com.retail.store.controllers;

import com.retail.store.dao.ProductCount;
import com.retail.store.models.Product;
import com.retail.store.services.OrderService;
import com.retail.store.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class OrderController {
    @Autowired
    private OrderService orderService;

    @Autowired
    private ProductService productService;

    @RequestMapping(value = "/best_sellers", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Object> fetchTrendingProducts(int amount) {
        ArrayList<ProductCount> productCounts = orderService.fetchBestSellers(amount);
        ArrayList<Product> products = new ArrayList<>();
        for (ProductCount productCount : productCounts) {
            products.add(productService.fetchProductById(productCount.getProductId()));
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

}
