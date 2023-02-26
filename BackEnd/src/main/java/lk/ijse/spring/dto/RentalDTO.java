package lk.ijse.spring.dto;

import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.RentDetail;
import lombok.*;

import java.sql.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class RentalDTO {
    String rentId;
    String pickUpDate;
     String returnDate;
    String pickUpVenue;
    String returnVenue;
    String pickUpTime;
    String statusOfReq;
    double total;
    double LossDamageWaiver;
    String duration;
    String cusId;
    String slipImgPath;
    List<RentDetailDTO> rentDetail;

}
