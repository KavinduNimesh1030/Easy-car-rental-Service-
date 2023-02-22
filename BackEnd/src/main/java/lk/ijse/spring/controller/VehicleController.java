package lk.ijse.spring.controller;

import lk.ijse.spring.dto.VehicleDTO;
import lk.ijse.spring.service.VehicleService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Vehicle")
@CrossOrigin
public class VehicleController {
    @Autowired
    VehicleService vehicleService;

    @PostMapping(params = "vid")
    public ResponseUtil getVehicleDetail(String vid){
        VehicleDTO vehicleDetail = vehicleService.getVehicleDetail(vid);
        System.out.println(vehicleDetail.toString());
        return new ResponseUtil("200","Get",vehicleDetail);
    }
}
