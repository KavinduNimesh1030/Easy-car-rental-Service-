package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.Rental;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface RentCarRepo extends JpaRepository<Rental,String> {
    @Query(value = "update  rental set statusOfReq =?1 where rentId =?2",nativeQuery = true)
    void updateRental(String name, String address);
}
