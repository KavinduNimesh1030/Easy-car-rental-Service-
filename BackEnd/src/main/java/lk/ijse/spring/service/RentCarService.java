package lk.ijse.spring.service;

import lk.ijse.spring.dto.RentalDTO;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public interface RentCarService {
    void saveRentDetail(RentalDTO rentalDTO);
    ArrayList<RentalDTO>getAllRentDetail();
    void updateRent(RentalDTO rentalDTO);
    RentalDTO getRentById(String rentId);
    ArrayList<RentalDTO> getRentalByCusId(String cusIs);
}
