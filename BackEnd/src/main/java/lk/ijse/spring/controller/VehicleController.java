package lk.ijse.spring.controller;

import lk.ijse.spring.util.ResponseUtil;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Vehicle")
@CrossOrigin
public class VehicleController {
    @PostMapping(params = "vid")
    public ResponseUtil getVehicleDetail(String vid){
        return new ResponseUtil();
    }
}
