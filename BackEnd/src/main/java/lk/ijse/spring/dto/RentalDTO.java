package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.sql.Time;
import java.util.Date;
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class RentalDTO {
    String rentId;
    Date pickUpDate;
    Date returnDate;
    String pickUpVenue;
    Time pickUpTime;
    String statusOfReq;
    double total;
    String duration;
}
