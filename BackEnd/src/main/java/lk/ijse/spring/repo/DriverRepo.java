package lk.ijse.spring.repo;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;

public interface DriverRepo extends JpaRepository<Driver,String> {
        ArrayList<Driver> findDriverByAvailability(String availability);
}
