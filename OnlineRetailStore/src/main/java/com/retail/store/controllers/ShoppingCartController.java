package com.retail.store.controllers;

import com.retail.store.models.Product;
import com.retail.store.services.ShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.Map;

@RestController
public class ShoppingCartController {
    @Autowired
    ShoppingCartService shoppingCartService;

    @RequestMapping(value = "/put_product_in_cart", method = RequestMethod.PUT)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Object> putProductInCart(@RequestBody Map<String, Object> params) {
        System.out.println(params.get("customerId"));
        Integer customerId = (Integer) params.get("customerId");
        Integer supplierId = (Integer) params.get("supplierId");
        Integer productId = (Integer) params.get("productId");
        Integer quantities = (Integer) params.get("quantities");
        Date date = GregorianCalendar.getInstance().getTime();
        shoppingCartService.putProduct(customerId, supplierId, productId, quantities, date);
        return new ResponseEntity<>("ok", HttpStatus.OK);
    }
}
