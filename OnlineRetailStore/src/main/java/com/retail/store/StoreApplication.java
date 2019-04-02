package com.retail.store;

import com.retail.store.models.Customer;
import com.retail.store.models.Order;
import com.retail.store.models.Product;
import com.retail.store.models.Supplier;
import com.retail.store.services.CustomerService;
import com.retail.store.services.OrderService;
import com.retail.store.services.ProductService;
import com.retail.store.services.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import java.lang.reflect.Array;
import java.util.*;

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

    @Autowired
    OrderService orderService;

    @Autowired
    SupplierService supplierService;

    @Override
    public void run(String... strings) throws Exception {
        insertCustomers();
        insertSuppliers();
        insertOrders();
    }

    void insertCustomers() {
        ArrayList<Customer> customers = new ArrayList<>();
        for (int i = 0; i < 4; i++) {
            customers.add(new Customer());
        }

        customers.get(0).setId(1);
        customers.get(0).setEmail("zhao@gmail.com");
        customers.get(0).setFirstName("A");
        customers.get(0).setLastName("Zhao");
        customers.get(0).setPassword("1234");
        customers.get(0).setRegisterDate(new GregorianCalendar(2019, Calendar.MARCH, 29).getTime());

        customers.get(1).setId(2);
        customers.get(1).setEmail("qian@gmail.com");
        customers.get(1).setFirstName("B");
        customers.get(1).setLastName("qian");
        customers.get(1).setPassword("1234");
        customers.get(1).setRegisterDate(new GregorianCalendar(2019, Calendar.MARCH, 29).getTime());

        customers.get(2).setId(3);
        customers.get(2).setEmail("sun@gmail.com");
        customers.get(2).setFirstName("C");
        customers.get(2).setLastName("Sun");
        customers.get(2).setPassword("1234");
        customers.get(2).setRegisterDate(new GregorianCalendar(2019, Calendar.MARCH, 29).getTime());

        customers.get(3).setId(4);
        customers.get(3).setEmail("li@gmail.com");
        customers.get(3).setFirstName("D");
        customers.get(3).setLastName("Li");
        customers.get(3).setPassword("1234");
        customers.get(3).setRegisterDate(new GregorianCalendar(2019, Calendar.MARCH, 29).getTime());

        for (Customer customer : customers) {
            customerService.createCustomer(customer);
        }
    }

    void insertSuppliers() {
        ArrayList<Supplier> suppliers = new ArrayList<>();
        for (int i = 0; i < 4; i++) {
            suppliers.add(new Supplier());
        }

        suppliers.get(0).setId(1);
        suppliers.get(0).setEmail("zhou@gmail.com");
        suppliers.get(0).setFirstName("E");
        suppliers.get(0).setLastName("Zhou");
        suppliers.get(0).setPassword("1234");
        suppliers.get(0).setSSN(123456789);

        suppliers.get(1).setId(2);
        suppliers.get(1).setEmail("wu@gmail.com");
        suppliers.get(1).setFirstName("F");
        suppliers.get(1).setLastName("Wu");
        suppliers.get(1).setPassword("1234");
        suppliers.get(1).setSSN(123456789);

        suppliers.get(2).setId(3);
        suppliers.get(2).setEmail("zheng@gmail.com");
        suppliers.get(2).setFirstName("G");
        suppliers.get(2).setLastName("Zheng");
        suppliers.get(2).setPassword("1234");
        suppliers.get(2).setSSN(123456789);

        suppliers.get(3).setId(4);
        suppliers.get(3).setEmail("wang@gmail.com");
        suppliers.get(3).setFirstName("H");
        suppliers.get(3).setLastName("Wang");
        suppliers.get(3).setPassword("1234");
        suppliers.get(3).setSSN(123456789);

        for (Supplier supplier : suppliers) {
            supplierService.createSupplier(supplier);
        }
    }

    void insertOrders() {
        Random random = new Random();
        ArrayList<Order> orders = new ArrayList<>();
        ArrayList<Product> products = new ArrayList<>();
        ArrayList<String> names = new ArrayList<>();
        names.add("Quartz Belt Watch");
        names.add("Women Freshwash");
        names.add("Room Flash Light");
        names.add("Room Flash Light");
        names.add("Man Office Bag");
        names.add("Charging Car");
        names.add("Bluetooth Speaker");
        names.add("Charging Car");
        int orderId = 1;
        for (int productId = 1; productId <= 8; productId++) {
            int supplierId = Math.abs(random.nextInt()) % 4 + 1;
            Date date = new GregorianCalendar(2019, Calendar.MARCH, 29).getTime();
            products.add(new Product(productId, supplierId, names.get(productId - 1),
                    150.00, date, "img/product/product" + productId + ".png", ""));
            for (int customerId = 1; customerId <= 4; customerId++) {
                orders.add(new Order(orderId, customerId, supplierId, productId, 150.0, 1, date, "accepted"));
            }
        }
        for (Product product : products) {
            productService.createProduct(product);
        }
        for (Order order : orders) {
            orderService.createOrder(order);
        }
    }
}
