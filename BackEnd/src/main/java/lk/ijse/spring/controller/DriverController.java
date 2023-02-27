package lk.ijse.spring.controller;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.service.DriverService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/Driver")
@CrossOrigin
public class DriverController {

    @Autowired
    DriverService driverService;

   @GetMapping
    public ResponseUtil getAllDrivers(){
       ArrayList<DriverDTO>all = driverService.getAllDriver();
       return new ResponseUtil("200","done",all);
   }
}
