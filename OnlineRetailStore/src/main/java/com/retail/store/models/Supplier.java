package com.retail.store.models;

import javax.persistence.*;

@Entity
public class Supplier {
    @Id
    @Column(name = "Supplier_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer Id;

    @Column(name = "Email")
    private String email;

    @Column(name = "Password")
    private String password;

    @Column(name = "First_Name")
    private String firstName;

    @Column(name = "Last_Name")
    private String lastName;

    @Column(name = "SSN")
    private Integer SSN;
}
