package com.retail.store.services;

import com.retail.store.dao.SupplierDao;
import com.retail.store.models.Supplier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SupplierService {
    @Autowired
    private SupplierDao supplierDao;

    public Supplier fetchSupplierById(int supplierId) {
        return supplierDao.read(supplierId);
    }

    public void createSupplier(Supplier supplier) {
        supplierDao.createSupplier(supplier);
    }
}
