package lk.ijse.spring.repo;

import lk.ijse.spring.dto.VehicleDTO;
import lk.ijse.spring.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.ArrayList;

public interface VehicleRepo extends JpaRepository<Vehicle,String> {
    Vehicle findVehicleByVid(String vid);
    @Query(value = "select  * from vehicle where brand =?1 and fuelType=?2 and noOfPassenger=?3 and transmissionType =?4 and type=?5 and dailyPrice  between=?6 and=?7",nativeQuery = true)
    ArrayList<Vehicle>getSelectedVehicle(String brand, String fuelType, String noOfPassenger, String transitionType, String type, String lowPrice, String maxPrice);

}
