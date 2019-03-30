package com.retail.store.dao;

import com.retail.store.models.Order;
import com.retail.store.models.Product;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class OrderDao {
    @Autowired
    private SessionFactory sessionFactory;

    public void createOrder(Order order) {
        try {
            Session session = sessionFactory.openSession();
            session.beginTransaction();
            Integer id = (Integer) session.save(order);
            System.out.println("Order is created With Id::" + id);
            session.getTransaction().commit();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public Order read(int orderId) {
        Session session = sessionFactory.openSession();

        Order order = session.get(Order.class, orderId);
        session.close();
        return order;
    }

    public void update(Order order) {

        Session session = sessionFactory.openSession();
        session.beginTransaction();

        session.update(order);

        session.getTransaction().commit();
        session.close();
    }

    public void delete(int orderId) {
        Session session = sessionFactory.openSession();
        session.beginTransaction();

        Order order = session.load(Order.class, orderId);
        session.delete(order);

        session.getTransaction().commit();
        session.close();
    }

    public ArrayList<Integer> fetchBestSellers(int amount) {
        Session session = sessionFactory.openSession();
        session.beginTransaction();
        String hql = "SELECT Customer_Order.Product_ID, COUNT(Customer_Order.Product_ID) as Sell_Count FROM Customer_Order GROUP BY Product_ID ORDER BY Sell_Count DESC";
        Query query = session.createQuery(hql);
        query.setMaxResults(amount);
        List<?> list = session.createQuery(hql).list();
        ArrayList<Integer> products = new ArrayList<>();
        for (int i = 0; i < list.size(); i++) {
            Object[] row = (Object[]) list.get(i);
            System.out.println(row[0] + ", " + row[1]);
            products.add((Integer) row[0]);
        }
        session.getTransaction().commit();
        session.close();
        return products;
    }
}
