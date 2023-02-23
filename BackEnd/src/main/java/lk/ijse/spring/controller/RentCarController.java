package lk.ijse.spring.controller;

import lk.ijse.spring.dto.RentalDTO;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Rent")
@CrossOrigin
public class RentCarController {


    @PostMapping
    public ResponseUtil saveRentDetails(@RequestBody RentalDTO rentalDTO){
        return new ResponseUtil();
    }
}
