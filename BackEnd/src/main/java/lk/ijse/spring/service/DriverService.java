package lk.ijse.spring.service;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.entity.Driver;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public interface DriverService {
    ArrayList<DriverDTO>getAllDriver();
    ArrayList<DriverDTO> findDriverByAvailability(String availability);
    void updateDriver(DriverDTO driverDTO);
}
