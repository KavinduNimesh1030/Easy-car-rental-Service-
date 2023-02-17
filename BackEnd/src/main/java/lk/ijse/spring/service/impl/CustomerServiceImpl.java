package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    CustomerRepo repo;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public void saveCustomer(CustomerDTO customerDTO) {
        Customer entity = modelMapper.map(customerDTO, Customer.class);
        repo.save(entity);
    }

    @Override
    public CustomerDTO CheckCustomer(String email, String password) {
        return modelMapper.map(repo.findByeAndEmailAndPassword(email,password),CustomerDTO.class);
    }
}
