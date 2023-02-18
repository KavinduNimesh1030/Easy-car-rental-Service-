package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.entity.Customer;
import org.springframework.stereotype.Component;

@Component
public interface CustomerService {
    void saveCustomer(CustomerDTO customerDTO);
    CustomerDTO CheckCustomer(String email);
}
