package com.retail.store.services;

import com.retail.store.dao.CustomerDao;
import com.retail.store.models.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {
    @Autowired
    private CustomerDao customerDao;

    public Customer fetchCustomerById(int customerId) {
        return customerDao.read(customerId);
    }

    public void createCustomer(Customer customer) {
        customerDao.createCustomer(customer);
    }
}
