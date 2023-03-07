package lk.ijse.spring.controller;

import lk.ijse.spring.dto.VehicleDTO;
import lk.ijse.spring.entity.Vehicle;
import lk.ijse.spring.service.VehicleService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/Vehicle")
@CrossOrigin
public class VehicleController {
    @Autowired
    VehicleService vehicleService;

    @GetMapping(params = "vid")
    public ResponseUtil getVehicleDetail(String vid){
        VehicleDTO vehicleDetail = vehicleService.getVehicleDetail(vid);
        System.out.println(vehicleDetail.toString());
        return new ResponseUtil("200","Get",vehicleDetail);
    }
    @PostMapping
    public ResponseUtil saveVehicle(@RequestBody VehicleDTO vehicleDTO){
        vehicleService.SaveVehicle(vehicleDTO);
        return new ResponseUtil("200","done",null);

    }
    @GetMapping
    public  ResponseUtil getAllVehicle(){
        ArrayList<VehicleDTO>all = vehicleService.getAllVehicle();
        return new ResponseUtil("200","done",all);
    }
    @PutMapping
    public  ResponseUtil updateVehicle(VehicleDTO dto){
        vehicleService.SaveVehicle(dto);
        return new ResponseUtil("200","updated",null);
    }
    @DeleteMapping(params = "vid")
    public ResponseUtil deleteVehicle(String vid){
        vehicleService.deleteVehicle(vid);
        return new ResponseUtil("200","deleted..!",null);
    }
  /*  @GetMapping(params = "brand,fuelType,noOfPassenger,transitionType,type,lowPrice,maxPrice")*/
 /* @RequestMapping(path = "/mno/objectKey/{id}/{name}", method = RequestMethod.GET)*/
    @GetMapping(path = "/{brand}/{fuelType}/{noOfPassenger}/{transitionType}/{type}/{lowPrice}/{maxPrice}")
    public ResponseUtil getSelectedVehicleDetail(@PathVariable String brand, @PathVariable String fuelType, @PathVariable String noOfPassenger,@PathVariable String transitionType,@PathVariable String type,@PathVariable double lowPrice,@PathVariable double maxPrice){
        System.out.println( "brnad"+brand);
        ArrayList<VehicleDTO> vehicle = vehicleService.getSelectedVehicleDetail(brand, fuelType, noOfPassenger, transitionType, type, lowPrice, maxPrice);
        System.out.println("se "+vehicle.toString());
        return new ResponseUtil("200","Get",vehicle);
    }
    @PutMapping(path = "/{ava}/{vid}")
    public ResponseUtil updateVehicleAva(@PathVariable  String ava, @PathVariable String vid){
        return new ResponseUtil();
    }

}
