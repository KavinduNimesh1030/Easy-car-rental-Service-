package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Customer")
@CrossOrigin
public class CustomerController {
    @Autowired
    CustomerService customerService;

    @PostMapping
    public ResponseUtil saveCus(@ModelAttribute CustomerDTO customerDTO){
        customerService.saveCustomer(new CustomerDTO(customerDTO.getId(),customerDTO.getEmail(),customerDTO.getPassword(),customerDTO.getAddress(),customerDTO.getContactNo(),customerDTO.getNic(),customerDTO.getDln(),customerDTO.getNicImgPath(),customerDTO.getDlnImgPath()));
        return new ResponseUtil("200",customerDTO.toString()+" Saved",null);
    }
    @GetMapping(params = "email,password")
    public ResponseUtil checkCustomer(String email,String password){
        customerService.CheckCustomer(email,password);
        return new ResponseUtil("200","Login Success",null);
    }

}
