package com.retail.store;

import com.retail.store.models.Customer;
import com.retail.store.models.Order;
import com.retail.store.models.Product;
import com.retail.store.services.CustomerService;
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

    @Autowired
    CustomerService customerService;

    @Override
    public void run(String... strings) throws Exception {
        insertProducts();
        insertCustomers();
    }

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

    void insertCustomers() {
        ArrayList<Customer> customers = new ArrayList<>();
        customers.add(new Customer());
        customers.add(new Customer());
        customers.add(new Customer());

        customers.get(0).setId(1);
        customers.get(0).setEmail("zhao@gmail.com");
        customers.get(0).setFirstName("A");
        customers.get(0).setLastName("Zhao");
        customers.get(0).setPassword(null);
        customers.get(0).setRegisterDate(new GregorianCalendar(2019, Calendar.MARCH, 29).getTime());

        customers.get(1).setId(2);
        customers.get(1).setEmail("qian@gmail.com");
        customers.get(1).setFirstName("B");
        customers.get(1).setLastName("qian");
        customers.get(1).setPassword(null);
        customers.get(1).setRegisterDate(new GregorianCalendar(2019, Calendar.MARCH, 29).getTime());

        customers.get(2).setId(3);
        customers.get(2).setEmail("sun@gmail.com");
        customers.get(2).setFirstName("C");
        customers.get(2).setLastName("Sun");
        customers.get(2).setPassword(null);
        customers.get(2).setRegisterDate(new GregorianCalendar(2019, Calendar.MARCH, 29).getTime());

        customers.get(3).setId(4);
        customers.get(3).setEmail("li@gmail.com");
        customers.get(3).setFirstName("D");
        customers.get(3).setLastName("Li");
        customers.get(3).setPassword(null);
        customers.get(3).setRegisterDate(new GregorianCalendar(2019, Calendar.MARCH, 29).getTime());

        for (Customer customer : customers) {
            customerService.createCustomer(customer);
        }
    }

//    void insertOrders() {
//        ArrayList<Order> orders = new ArrayList<>();
//        for (Order order : orders) {
//        }
//    }
}
