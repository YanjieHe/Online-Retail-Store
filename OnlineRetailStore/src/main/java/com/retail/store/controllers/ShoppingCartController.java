package com.retail.store.controllers;

import com.retail.store.models.Product;
import com.retail.store.services.ShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;
import java.util.GregorianCalendar;

@RestController
public class ShoppingCartController {
    @Autowired
    ShoppingCartService shoppingCartService;

    @RequestMapping(value = "/put_product_in_cart", method = RequestMethod.PUT)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Object> putProductInCart(int customerId, int supplierId, int productId, int quantities) {
        Date date = GregorianCalendar.getInstance().getTime();
        shoppingCartService.putProduct(customerId, supplierId, productId, quantities, date);
        return new ResponseEntity<>("ok", HttpStatus.OK);
    }
}
