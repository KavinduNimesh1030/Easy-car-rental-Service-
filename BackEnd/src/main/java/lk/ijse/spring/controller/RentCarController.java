package lk.ijse.spring.controller;

import lk.ijse.spring.dto.RentalDTO;
import lk.ijse.spring.dto.VehicleDTO;
import lk.ijse.spring.service.RentCarService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
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
    @PutMapping()
    public ResponseUtil updateRental(@RequestBody RentalDTO rentalDTO){
        rentCarService.updateRent(rentalDTO);
        return new ResponseUtil("200","done",null);
    }

    @GetMapping(params = "rentId")
    public  ResponseUtil getRentDetailById(String rentId){
      RentalDTO rentalDTO = rentCarService.getRentById(rentId);
        return new ResponseUtil("200","done",rentalDTO);
    }
    @GetMapping(params = "CusId")
    public ResponseUtil getRentalByCusId(String cusId){
        ArrayList<RentalDTO> all = rentCarService.getRentalByCusId(cusId);
        return new ResponseUtil("200","done",all);

    }
    @GetMapping(params = "a", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil generateRentalId() {
        System.out.println("rent id"+rentCarService.generateRentalId());
        return new ResponseUtil("200", "Ok", rentCarService.generateRentalId());
    }
}
