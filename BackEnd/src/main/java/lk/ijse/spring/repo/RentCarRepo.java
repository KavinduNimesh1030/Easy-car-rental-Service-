package lk.ijse.spring.repo;

import lk.ijse.spring.dto.RentalDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.Rental;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.ArrayList;

public interface RentCarRepo extends JpaRepository<Rental,String> {
    Rental findRentalByRentId(String rentId);
    ArrayList<RentalDTO> findRentalByCusId(String cusId);

    @Query(value = "SELECT rentId FROM rental ORDER BY rentId DESC LIMIT 1", nativeQuery = true)
    String generateRentalId();

    @Query(value = "SELECT SUM(total) FROM rental where pickUpDate > now() - INTERVAL 1 month",nativeQuery = true)
    double getMonthTotal();
}
