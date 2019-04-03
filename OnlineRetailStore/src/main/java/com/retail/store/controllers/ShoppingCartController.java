package com.retail.store.controllers;

import com.retail.store.services.CartItem;
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
        Integer customerId = Integer.parseInt(params.get("customerId").toString());
        Integer productId = Integer.parseInt(params.get("productId").toString());
        Integer quantities = Integer.parseInt(params.get("quantities").toString());
        Date date = GregorianCalendar.getInstance().getTime();
        shoppingCartService.putProduct(customerId, productId, quantities, date);
        return new ResponseEntity<>("ok", HttpStatus.OK);
    }

    @RequestMapping(value = "/items_in_the_cart", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Object> getItemsInTheCart(int customerId) {
        ArrayList<CartItem> cartItems = shoppingCartService.getItemsInTheCart(customerId);
        return new ResponseEntity<>(cartItems, HttpStatus.OK);
    }

    @RequestMapping(value = "/checkout", method = RequestMethod.POST)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Object> checkOut(int customerId) {
        shoppingCartService.placeOrders(customerId);
        return new ResponseEntity<>("success", HttpStatus.OK);
    }
}
