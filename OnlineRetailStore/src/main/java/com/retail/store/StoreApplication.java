package com.retail.store;

import com.retail.store.models.Product;
import com.retail.store.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

@SpringBootApplication
public class StoreApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(StoreApplication.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("*").allowedOrigins("http://localhost:3000");
            }
        };
    }

    @Autowired
    ProductService productService;

    void insertProducts() {
        ArrayList<Product> products = new ArrayList<>();
        products.add(new Product(1, "Quartz Belt Watch", 150.00,
                new GregorianCalendar(2019, Calendar.MARCH, 29).getTime(), "img/product/product1.png", ""));
        products.add(new Product(2, "Women Freshwash", 150.00,
                new GregorianCalendar(2019, Calendar.MARCH, 29).getTime(), "img/product/product2.png", ""));
        products.add(new Product(3, "Room Flash Light", 150.00,
                new GregorianCalendar(2019, Calendar.MARCH, 29).getTime(), "img/product/product3.png", ""));
        products.add(new Product(4, "Room Flash Light", 150.00,
                new GregorianCalendar(2019, Calendar.MARCH, 29).getTime(), "img/product/product4.png", ""));
        products.add(new Product(5, "Man Office Bag", 150.00,
                new GregorianCalendar(2019, Calendar.MARCH, 29).getTime(), "img/product/product5.png", ""));
        products.add(new Product(6, "Charging Car", 150.00,
                new GregorianCalendar(2019, Calendar.MARCH, 29).getTime(), "img/product/product6.png", ""));
        products.add(new Product(7, "Blutooth Speaker", 150.00,
                new GregorianCalendar(2019, Calendar.MARCH, 29).getTime(), "img/product/product7.png", ""));
        products.add(new Product(8, "Charging Car", 150.00,
                new GregorianCalendar(2019, Calendar.MARCH, 29).getTime(), "img/product/product8.png", ""));
        for (Product product : products) {
            productService.createProduct(product);
        }
    }

    @Override
    public void run(String... strings) throws Exception {
        insertProducts();
    }
}
