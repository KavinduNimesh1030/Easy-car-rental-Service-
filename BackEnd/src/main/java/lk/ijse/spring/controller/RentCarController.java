package lk.ijse.spring.controller;

import lk.ijse.spring.dto.RentDetailDTO;
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
    public ResponseUtil getRentalByCusId(String CusId){
        System.out.println("----------------"+CusId);
        ArrayList<RentalDTO> all = rentCarService.getRentalByCusId(CusId);
        return new ResponseUtil("200","done",all);

    }
    @GetMapping(path = "/{id}")
    public ResponseUtil generateRentalId(@PathVariable String id) {
        System.out.println("id"+id);
        System.out.println("rent id"+rentCarService.generateRentalId());
        return new ResponseUtil("200", "Ok", rentCarService.generateRentalId());
    }
 /*   @GetMapping(params = "driverId")
    public ResponseUtil getRentByDriverId(String driverId){
        RentDetailDTO rentDetailDTO = rentCarService.getRentByDriverId(driverId);
        return new ResponseUtil("200","done",rentDetailDTO);
    }*/
}
