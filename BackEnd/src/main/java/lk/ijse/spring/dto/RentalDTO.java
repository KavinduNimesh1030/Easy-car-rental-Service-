package lk.ijse.spring.dto;

import lk.ijse.spring.entity.RentDetail;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.sql.Time;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
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
    List<RentDetail> rentDetail;
}
