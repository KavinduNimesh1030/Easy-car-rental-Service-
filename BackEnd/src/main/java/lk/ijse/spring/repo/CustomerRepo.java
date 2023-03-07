package lk.ijse.spring.repo;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;


public interface CustomerRepo extends JpaRepository<Customer,String> {

    Customer findCustomerByEmail(String email);



}
