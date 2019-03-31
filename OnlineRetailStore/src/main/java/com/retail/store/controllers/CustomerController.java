package com.retail.store.controllers;

import com.retail.store.models.Customer;
import com.retail.store.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


@RestController
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    private static HashMap<Integer, Integer> sessions;

    static {
        sessions = new HashMap<>();
    }

    @RequestMapping(value = "/get_customer_by_id", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Object> getAllCustomers(int customerId) {
        Customer customer = customerService.fetchCustomerById(customerId);
        return new ResponseEntity<>(customer, HttpStatus.OK);
    }

    @RequestMapping(value = "/customer_login", method = RequestMethod.POST)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Object> customerLogin(
            @RequestBody Map<String, Object> params) {
        String email = params.get("email").toString();
        String password = params.get("password").toString();
        if (customerService.customerExists(email, password)) {
            Customer customer = customerService.findCustomerByEmail(email);
            int sessionId = sessions.size();
            sessions.put(sessionId, customer.getId());
            return new ResponseEntity<>(Integer.toString(sessionId), HttpStatus.OK);
        } else {
            return new ResponseEntity<>("-1", HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/customer_information/{sessionId}", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Object> customerInformation(
            @PathVariable("sessionId") int sessionId) {
        if (sessions.containsKey(sessionId)) {
            int customerId = sessions.get(sessionId);
            Customer customer = customerService.fetchCustomerById(customerId);
            return new ResponseEntity<>(customer, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }
}
