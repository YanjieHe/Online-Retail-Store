package com.retail.store.controllers;

import com.retail.store.models.Customer;
import com.retail.store.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;

@RestController
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    private static ArrayList<Customer> customers = new ArrayList<>();

    static void addCustomers() {
        customers.add(new Customer());
        customers.add(new Customer());
        customers.add(new Customer());

        customers.get(0).setId(0);
        customers.get(0).setEmail("zhao@gmail.com");
        customers.get(0).setFirstName("A");
        customers.get(0).setLastName("Zhao");
        customers.get(0).setPassword(null);
        customers.get(0).setRegisterDate(new Date(2019, 01, 10));

        customers.get(1).setId(1);
        customers.get(1).setEmail("qian@gmail.com");
        customers.get(1).setFirstName("B");
        customers.get(1).setLastName("qian");
        customers.get(1).setPassword(null);
        customers.get(1).setRegisterDate(new Date(2019, 01, 20));

        customers.get(2).setId(2);
        customers.get(2).setEmail("sun@gmail.com");
        customers.get(2).setFirstName("C");
        customers.get(2).setLastName("Sun");
        customers.get(2).setPassword(null);
        customers.get(2).setRegisterDate(new Date(2019, 01, 30));

    }

    @RequestMapping(value = "/get_customer_by_id", method = RequestMethod.GET)
    public ResponseEntity<Object> getAllCustomers(int customerId) {
        System.out.println("customerId = " + customerId);
        if (customers.size() == 0) {
            addCustomers();
            for (Customer customer : customers) {
                customerService.createCustomer(customer);
            }
        }
        Customer customer = customerService.fetchCustomerById(customerId);
        return new ResponseEntity<>(customer, HttpStatus.OK);
    }
}
