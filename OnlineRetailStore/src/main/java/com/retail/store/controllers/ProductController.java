package com.retail.store.controllers;

import com.retail.store.models.Product;
import com.retail.store.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
public class ProductController {
    @Autowired
    private ProductService productService;

    @RequestMapping(value = "/trending_products", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Object> fetchTrendingProducts(int amount) {
        ArrayList<Product> products = productService.fetchTrendingProducts(amount);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @RequestMapping(value = "/product_information/{productId}", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Object> fetchProductById(@PathVariable("productId") int productId) {
        Product product = productService.fetchProductById(productId);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }
}
