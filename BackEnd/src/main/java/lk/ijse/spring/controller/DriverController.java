package lk.ijse.spring.controller;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.service.DriverService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/Driver")
@CrossOrigin
public class DriverController {

    @Autowired
    DriverService driverService;

   @GetMapping(params = "availability")
    public ResponseUtil getAllDrivers(String availability){
       ArrayList<DriverDTO>all = driverService.findDriverByAvailability(availability);
       return new ResponseUtil("200","done",all);
   }
   @PutMapping
    public ResponseUtil updateDriver( @RequestBody DriverDTO driverDTO){
        return  new ResponseUtil("200","done",null);
   }
}
