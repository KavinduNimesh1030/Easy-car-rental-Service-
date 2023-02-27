package lk.ijse.spring.controller;

import lk.ijse.spring.util.ResponseUtil;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Driver")
@CrossOrigin
public class DriverController {
   @GetMapping
    public ResponseUtil getAllDrivers(){
       return ResponseUtil("200","done",)
   }
}
