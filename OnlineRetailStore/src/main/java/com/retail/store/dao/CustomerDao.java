package com.retail.store.dao;

import com.retail.store.models.Customer;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public class CustomerDao {
    @Autowired
    private SessionFactory sessionFactory;

    public void createCustomer(Customer customer) {
        try {
            Session session = sessionFactory.openSession();
            session.beginTransaction();
            Integer id = (Integer) session.save(customer);
            System.out.println("Customer is created With Id::" + id);
            session.getTransaction().commit();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public Customer read(int customerId) {
        Session session = sessionFactory.openSession();

        Customer customer = session.get(Customer.class, customerId);
        session.close();
        return customer;
    }

    public void update(Customer customer) {

        Session session = sessionFactory.openSession();
        session.beginTransaction();

        session.update(customer);

        session.getTransaction().commit();
        session.close();
    }

    public void delete(int customerId) {

        Session session = sessionFactory.openSession();
        session.beginTransaction();

        Customer customer = session.load(Customer.class, customerId);
        System.out.println(customer);
        session.delete(customer);

        session.getTransaction().commit();
        session.close();
    }

    public boolean customerExists(String email, String password) {

        Session session = sessionFactory.openSession();
        session.beginTransaction();
        String hql = "FROM Customer WHERE email = '" + email + "' AND password = '" + password + "'";
        Query query = session.createQuery(hql);
        query.setMaxResults(1);
        boolean result;
        if (query.list().size() == 1) {
            result = true;
        } else {
            result = false;
        }
        session.getTransaction().commit();
        session.close();
        return result;
    }

    public Customer findCustomerByEmail(String email) {
        Session session = sessionFactory.openSession();
        session.beginTransaction();
        String hql = "FROM Customer WHERE email = '" + email + "'";
        Query query = session.createQuery(hql);
        query.setMaxResults(1);
        Customer customer = (Customer) query.list().get(0);
        session.getTransaction().commit();
        session.close();
        return customer;
    }
}
