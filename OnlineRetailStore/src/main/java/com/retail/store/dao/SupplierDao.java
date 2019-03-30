package com.retail.store.dao;

import com.retail.store.models.Supplier;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class SupplierDao {
    @Autowired
    private SessionFactory sessionFactory;

    public void createSupplier(Supplier supplier) {
        try {
            Session session = sessionFactory.openSession();
            session.beginTransaction();
            Integer id = (Integer) session.save(supplier);
            System.out.println("Supplier is created With Id::" + id);
            session.getTransaction().commit();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public Supplier read(int supplierId) {
        Session session = sessionFactory.openSession();

        Supplier supplier = session.get(Supplier.class, supplierId);
        session.close();
        return supplier;
    }

    public void update(Supplier supplier) {

        Session session = sessionFactory.openSession();
        session.beginTransaction();

        session.update(supplier);

        session.getTransaction().commit();
        session.close();
    }

    public void delete(int supplierId) {

        Session session = sessionFactory.openSession();
        session.beginTransaction();

        Supplier supplier = session.load(Supplier.class, supplierId);
        System.out.println(supplier);
        session.delete(supplier);

        session.getTransaction().commit();
        session.close();
    }
}
