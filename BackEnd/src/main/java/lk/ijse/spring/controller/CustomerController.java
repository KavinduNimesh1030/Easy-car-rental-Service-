package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/Customer")
@CrossOrigin
public class CustomerController {
    @Autowired
    CustomerService customerService;

    @GetMapping
    public ResponseUtil getAllCustomers(){
        ArrayList<CustomerDTO>all = customerService.getAllCustomers();
        return new ResponseUtil("200","done",all);
    }

    @PostMapping
    public ResponseUtil saveCus(@RequestBody CustomerDTO customerDTO){
        customerService.saveCustomer(customerDTO);
        return new ResponseUtil("200",customerDTO.toString()+" Saved",null);
    }
    @GetMapping(params = "email")
    public ResponseUtil checkCustomer(String email){
        System.out.println(email);
        CustomerDTO customerDTO = customerService.CheckCustomer(email);
        System.out.println(customerDTO);
            return new ResponseUtil("200", "Login Success",customerDTO);

    }

}
