package lk.ijse.spring.controller;

import lk.ijse.spring.dto.RentalDTO;
import lk.ijse.spring.dto.VehicleDTO;
import lk.ijse.spring.service.RentCarService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/Rent")
@CrossOrigin
public class RentCarController {

    @Autowired
    RentCarService rentCarService;

    @GetMapping
    public ResponseUtil getAllRentDetail(){
        ArrayList<RentalDTO> all = rentCarService.getAllRentDetail();
        return new ResponseUtil("200","success",all);
    }

    @PostMapping
    public ResponseUtil saveRentDetails(@RequestBody RentalDTO rentalDTO){
        rentCarService.saveRentDetail(rentalDTO);
        return new ResponseUtil("200","Saved!",null);
    }
    @PutMapping(params = "rentId,statusOfReq")
    public ResponseUtil updateRental(String rentId,String statusOfReq){

    }
}
