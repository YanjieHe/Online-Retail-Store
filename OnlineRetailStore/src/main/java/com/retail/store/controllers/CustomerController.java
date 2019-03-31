package com.retail.store.controllers;

import com.retail.store.models.Customer;
import com.retail.store.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;

@RestController
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @RequestMapping(value = "/get_customer_by_id", method = RequestMethod.GET)
    public ResponseEntity<Object> getAllCustomers(int customerId) {
        Customer customer = customerService.fetchCustomerById(customerId);
        return new ResponseEntity<>(customer, HttpStatus.OK);
    }

    @RequestMapping(value = "/customer_login", method = RequestMethod.POST)
    public ResponseEntity<Object> customerLogin(
            @RequestParam(value = "username", required = true) String username,
            @RequestParam(value = "password", required = true) String password) {

    }
}
