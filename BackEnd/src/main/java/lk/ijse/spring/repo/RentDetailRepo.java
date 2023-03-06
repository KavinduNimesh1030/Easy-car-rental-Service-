package lk.ijse.spring.repo;

import lk.ijse.spring.entity.RentDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentDetailRepo extends JpaRepository<RentDetail,String> {
    RentDetail getRentDetailByDriverId(String driverId);
}
