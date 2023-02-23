package lk.ijse.spring.service;

import lk.ijse.spring.dto.RentalDTO;
import org.springframework.stereotype.Component;

@Component
public interface RentCarService {
    void saveRentDetail(RentalDTO rentalDTO);
}
