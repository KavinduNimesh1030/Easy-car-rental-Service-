package lk.ijse.spring.dto;

import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.RentDetail;
import lombok.*;

import java.sql.Time;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class RentalDTO {
    String rentId;
    Date pickUpDate;
    Date returnDate;
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
