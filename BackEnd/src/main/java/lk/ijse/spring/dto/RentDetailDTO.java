package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.sql.Date;
import java.sql.Time;
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class RentDetailDTO {
    String rentId;
    String vId;
    String driverOption;
    Date pickDate;
    Time pickTime;
    Date returnDate;
}
