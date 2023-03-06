package lk.ijse.spring.controller;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.dto.RentDetailDTO;
import lk.ijse.spring.service.DriverService;
import lk.ijse.spring.service.RentCarService;
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

    @Autowired
    RentCarService rentCarService;

   @GetMapping(params = "availability")
    public ResponseUtil getAllDrivers(String availability){
       ArrayList<DriverDTO>all = driverService.findDriverByAvailability(availability);
       return new ResponseUtil("200","done",all);
   }

   @PutMapping
    public ResponseUtil updateDriver( @RequestBody DriverDTO driverDTO){
       driverService.updateDriver(driverDTO);
        return  new ResponseUtil("200","Updated",null);
   }
   @GetMapping(params = "driverId")
    public  ResponseUtil getDriverById(String driverId){
       DriverDTO driverDTO = driverService.getDriverById(driverId);
       return  new ResponseUtil("200","done",driverDTO);
   }
   @PostMapping
    public ResponseUtil addDriver(DriverDTO driverDTO){
       driverService.addDriver(driverDTO);
       return  new ResponseUtil("200","Saved..!",null);
   }
   @GetMapping
    public ResponseUtil getDrivers(){
       ArrayList<DriverDTO>all =driverService.getAllDriver();
       return  new ResponseUtil("200","Saved..!",all);
   }
    @GetMapping(path = "/{driverId}")
    public ResponseUtil getRentByDriverId(@PathVariable String driverId){
        RentDetailDTO rentDetailDTO = rentCarService.getRentByDriverId(driverId);
        return new ResponseUtil("200","done",rentDetailDTO);
    }


}
