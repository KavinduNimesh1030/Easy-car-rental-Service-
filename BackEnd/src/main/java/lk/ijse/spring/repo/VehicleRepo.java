package lk.ijse.spring.repo;

import lk.ijse.spring.dto.VehicleDTO;
import lk.ijse.spring.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;

public interface VehicleRepo extends JpaRepository<Vehicle,String> {
    Vehicle findVehicleByVid(String vid);
}
