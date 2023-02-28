package lk.ijse.spring.service;

import lk.ijse.spring.dto.VehicleDTO;
import org.springframework.stereotype.Component;

@Component
public interface VehicleService {
    VehicleDTO getVehicleDetail(String vid);
    void SaveVehicle(VehicleDTO vehicleDTO);
}
