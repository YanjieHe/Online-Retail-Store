package com.retail.store.dao;

import com.retail.store.models.ShoppingCart;
import com.retail.store.models.ShoppingCartCompositeKey;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ShoppingCartDao {
    @Autowired
    private SessionFactory sessionFactory;

    public void createShoppingCart(ShoppingCart shoppingCart) {
        try {
            Session session = sessionFactory.openSession();
            session.beginTransaction();
            ShoppingCartCompositeKey id = (ShoppingCartCompositeKey) session.save(shoppingCart);
            System.out.println("Shopping cart is created With Id::" + id);
            session.getTransaction().commit();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public ShoppingCart read(int customerId, int productId) {
        Session session = sessionFactory.openSession();
        ShoppingCartCompositeKey shoppingCartCompositeKey = new ShoppingCartCompositeKey(customerId, productId);
        ShoppingCart shoppingCart = session.get(ShoppingCart.class, shoppingCartCompositeKey);
        session.close();
        return shoppingCart;
    }

    public void update(ShoppingCart shoppingCart) {

        Session session = sessionFactory.openSession();
        session.beginTransaction();

        session.update(shoppingCart);

        session.getTransaction().commit();
        session.close();
    }

    public void delete(int customerId, int productId) {
        Session session = sessionFactory.openSession();
        session.beginTransaction();

        ShoppingCartCompositeKey shoppingCartCompositeKey = new ShoppingCartCompositeKey(customerId, productId);
        ShoppingCart shoppingCart = session.load(ShoppingCart.class, shoppingCartCompositeKey);
        session.delete(shoppingCart);

        session.getTransaction().commit();
        session.close();
    }
}
