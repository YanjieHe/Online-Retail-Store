package com.retail.store.services;

import com.retail.store.dao.ShoppingCartDao;
import com.retail.store.models.ShoppingCart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class ShoppingCartService {
    @Autowired
    ShoppingCartDao shoppingCartDao;

    public void putProduct(int customerId, int productId, int quantities, Date date) {
        ShoppingCart shoppingCart = new ShoppingCart(customerId, productId, quantities, date);
        if (shoppingCartDao.read(customerId, productId) == null) {
            shoppingCartDao.createShoppingCart(shoppingCart);
        } else {
            shoppingCartDao.update(shoppingCart);
        }
    }
}
