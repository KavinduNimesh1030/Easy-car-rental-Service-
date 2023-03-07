package lk.ijse.spring.service;

import lk.ijse.spring.dto.VehicleDTO;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public interface VehicleService {
    VehicleDTO getVehicleDetail(String vid);
    void SaveVehicle(VehicleDTO vehicleDTO);
    ArrayList<VehicleDTO>getAllVehicle();
    void updateVehicle(VehicleDTO vehicleDTO);
    void deleteVehicle(String vid);
    ArrayList<VehicleDTO>getSelectedVehicleDetail(String brand,String fuelType,String noOfPassenger,String transitionType,String type,double lowPrice, double maxPrice);
    void updateVehicleAva(String ava ,String vid);
}
